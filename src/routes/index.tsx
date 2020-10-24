import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Question, Welcome, Feedback } from '../screens'
import { RootStackParamList, SCREENS } from './types'

const Stack = createStackNavigator<RootStackParamList>()
const { Screen } = Stack

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.WELCOME}>
        <Screen
          name={SCREENS.WELCOME}
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name={SCREENS.QUESTION}
          component={Question}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name={SCREENS.FEEDBACK}
          component={Feedback}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
