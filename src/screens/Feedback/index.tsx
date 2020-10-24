import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, SCREENS } from '../../routes/types'
import { RouteProp } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Store } from '../../store'
import FeedbackList from './components/FeedbackList'
import styles from './styles'
import Button from '../../components/Button'

type FeedbackScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.FEEDBACK
>
type FeedbackScreenRouteProp = RouteProp<RootStackParamList, SCREENS.FEEDBACK>

export interface FeedbackProps {
  navigation: FeedbackScreenNavigationProp
  route: FeedbackScreenRouteProp
}

const Feedback = ({ navigation, route }: FeedbackProps) => {
  const questions = useSelector((state: Store) => state.getQuestions.questions)
  const [answers, setAnswers] = useState<
    Array<{
      question: string
      answer: string
      correctAnswer: string
      isCorrect: boolean
    }>
  >([])
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    const handleQuestionsAnswers = () => {
      let correctAnswers: number = 0
      let answersArray: Array<{
        question: string
        answer: string
        correctAnswer: string
        isCorrect: boolean
      }> = []
      for (let index = 0; index < questions.length; index++) {
        const isCorrect =
          questions[index].correct_answer === route.params.responses[index]

        if (isCorrect) {
          correctAnswers++
        }

        answersArray = [
          ...answersArray,
          {
            question: questions[index].question,
            answer: route.params.responses[index],
            correctAnswer: questions[index].correct_answer,
            isCorrect:
              questions[index].correct_answer === route.params.responses[index],
          },
        ]
        setScore(correctAnswers)
        setAnswers(answersArray)
      }
    }

    handleQuestionsAnswers()
  }, [])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
    >
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.upContainer}>
        <View style={styles.upContent}>
          <Text style={styles.title}>You scored</Text>
          <View style={styles.activeQuestionContainer}>
            <AntDesign
              style={styles.icon}
              name="questioncircle"
              size={14}
              color="#5e6f77"
            />
            <View>
              <Text style={styles.text}>
                <Text style={styles.activeQuestion}>{score} </Text>/
                {questions.length}{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <SafeAreaView style={styles.downContent}>
        <FeedbackList answers={answers} />
        <View style={styles.buttonContainer}>
          <Button
            text="PLAY AGAIN ?"
            onPress={() => navigation.navigate(SCREENS.WELCOME)}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Feedback
