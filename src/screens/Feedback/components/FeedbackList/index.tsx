import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import FeedbackRow from '../FeedbackRow'

export interface FeedbackListProps {
  answers: Array<{ question: string; isCorrect: boolean }>
}

const FeedbackList = ({ answers }: FeedbackListProps) => {
  return (
    <View style={styles.container}>
      {answers &&
        answers.map((answer, index) => <FeedbackRow key={index} {...answer} />)}
    </View>
  )
}

export default FeedbackList
