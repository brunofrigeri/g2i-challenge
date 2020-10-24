import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export interface TimerProps {
  seconds: number
}

const Timer = ({ seconds }: TimerProps) => {
  const [timer, setTimer] = useState<number>(seconds)

  useEffect(() => {
    if (!timer) return

    const interval = setInterval(() => {
      setTimer(timer - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.timer}>{timer}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#44a9ff',
    marginBottom: 40,
    justifyContent: 'center',
  },
  content: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#fafafa',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  timer: {
    zIndex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})

export default Timer
