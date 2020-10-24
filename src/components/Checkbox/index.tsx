import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export interface CheckboxProps {
  value: string
  onPress: () => void
}

const Checkbox = ({ value, onPress = () => {} }: CheckboxProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.8)',
    paddingVertical: 18,
    marginVertical: 10,
  },
  activeContainer: {
    backgroundColor: 'green',
  },
  activeValue: {
    color: '#fff',
  },
  value: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
})

export default Checkbox
