import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Text, View, ActivityIndicator, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Checkbox from '../../components/Checkbox'
import { connected, ConnectedProps } from './connect'
import { shuffle } from '../../utils/shuffle'
import Timer from '../../components/Timer'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, SCREENS } from '../../routes/types'
import styles from './styles'

type QuestionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.QUESTION
>

export interface QuestionProps extends ConnectedProps {}

const Question = ({ questions, fetchQuestions, fetching }: QuestionProps) => {
  const navigation = useNavigation<QuestionScreenNavigationProp>()

  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [alternatives, setAlternatives] = useState<Array<string>>([])
  const [responses, setResponses] = useState<Array<string>>([])

  useEffect(() => {
    fetchQuestions()
  }, [])

  useEffect(() => {
    if (questions && questions[activeQuestion]) {
      const correctAnwser = questions[activeQuestion].correct_answer
      const incorrectAnwser = questions[activeQuestion].incorrect_answers

      setAlternatives([correctAnwser, ...incorrectAnwser])
    }
  }, [questions])

  const onOptionPress = (alternative: string) => {
    setResponses([...responses, alternative])
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1)
    } else {
      navigation.navigate(SCREENS.FEEDBACK, {
        responses: [...responses, alternative],
      })
    }
  }

  if (fetching) return <ActivityIndicator size="small" style={{ flex: 1 }} />

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/draw7.png')}
      />
      <View>
        {questions && questions[activeQuestion] && (
          <View style={styles.card}>
            <View style={styles.content}>
              <View style={styles.activeQuestionContainer}>
                {/* Add function as a tooltip for more user information */}
                <AntDesign
                  style={styles.icon}
                  name="questioncircle"
                  size={14}
                  color="#5e6f77"
                />
                <View>
                  <Text style={styles.text}>
                    <Text style={styles.activeQuestion}>
                      {activeQuestion + 1}{' '}
                    </Text>
                    /{questions.length}{' '}
                  </Text>
                </View>
              </View>
            </View>
            {/* <Timer seconds={30} /> */}
            <Text style={styles.category}>
              {questions[activeQuestion].category}
            </Text>
            <Text style={styles.question}>
              {questions[activeQuestion].question
                .replace(/&#039;/g, "'")
                .replace(/(&quot\;)/g, '"')}
            </Text>
            <View style={styles.alternativeContainer}>
              {shuffle(alternatives).map((alternative, index) => {
                return (
                  <Checkbox
                    key={index}
                    value={alternative}
                    onPress={() => onOptionPress(alternative)}
                  />
                )
              })}
            </View>
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default connected(Question)
