import React, { useState } from 'react'
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'

export interface FeedbackRowProps {
  question: string
  answer: string
  correctAnswer: string
  isCorrect: boolean
}

const FeedbackRow = ({
  question,
  answer,
  correctAnswer,
  isCorrect,
}: FeedbackRowProps) => {
  const [collapsible, setCollapsible] = useState<boolean>(false)
  const opacity = useState<Animated.Value>(new Animated.Value(0))[0]

  const onPress = () => {
    setCollapsible(!collapsible)

    Animated.timing(opacity, {
      toValue: !collapsible ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }

  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          {isCorrect ? (
            <Image
              style={styles.icon}
              source={require('../../../../assets/draw1.png')}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require('../../../../assets/draw3.png')}
            />
          )}
          <View style={styles.separatorLine} />
          <Text style={styles.question}>
            {question.replace(/&#039;/g, "'").replace(/(&quot\;)/g, '"')}
          </Text>
          {!isCorrect && (
            <AntDesign
              style={{ paddingLeft: 10, alignSelf: 'center' }}
              name={!collapsible ? 'down' : 'up'}
              size={24}
              color="#808080"
            />
          )}
        </View>
        {!isCorrect && collapsible && (
          <View style={styles.collapsible}>
            <Animated.View style={{ opacity }}>
              <Text style={styles.text}>
                Your answer: <Text style={styles.wrongAnswer}>{answer}</Text>
              </Text>
              <Text style={styles.text}>
                Correct answer:{' '}
                <Text style={styles.rightAnswer}>{correctAnswer}</Text>
              </Text>
            </Animated.View>
          </View>
        )}
      </TouchableOpacity>
    </>
  )
}

export default FeedbackRow
