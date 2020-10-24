import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'

export interface ButtonProps extends TouchableOpacityProps {
  text: string
}

const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.text}>{text}</Text>
      <AntDesign name="arrowright" size={32} color="white" />
    </TouchableOpacity>
  )
}

export default Button
