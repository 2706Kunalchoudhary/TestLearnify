import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/login/Login'
import Otp from './src/screens/otp/Otp'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/navigations/MainStack'
import { colorConstants } from './src/utils/constants'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colorConstants.violet} />
      <MainStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})