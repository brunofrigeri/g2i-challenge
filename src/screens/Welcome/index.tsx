import React from 'react'
import { Image, SafeAreaView, Text, View, StatusBar } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, SCREENS } from '../../routes/types'
import { useNavigation } from '@react-navigation/native'
import BackgroundDrawers from '../../components/BackgroundDrawers'
import styles from './styles'
import Button from '../../components/Button'

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.WELCOME
>

const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>()

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <StatusBar backgroundColor={'#2d3956'} barStyle={'light-content'} />
      <View style={styles.upContent}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to the {'\n'}Trivia Challenge!</Text>
      </View>
      <SafeAreaView style={styles.downContainer}>
        <View style={styles.downContent}>
          <BackgroundDrawers />
          <View style={styles.descriptionContainer}>
            <View style={styles.square} />
            <Text style={styles.description}>
              You will be presented{'\n'}with 10 True or False{'\n'}questions.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.circle} />
            <Text style={styles.description}>Can you score 100%?</Text>
          </View>
          <Button
            text="BEGIN"
            onPress={() => navigation.navigate(SCREENS.QUESTION)}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

export default Welcome
