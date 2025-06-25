import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../login/login'
import Signup from '../login/signup'
import CompleteSignup from '../login/completesignup'

const Stack = createStackNavigator()

const Authstack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="signup" component={Signup} options={{headerShown: false}}/>
            <Stack.Screen name="completeSignup" component={CompleteSignup} options={{headerShown: false}}/>
            {/* <Stack.Screen name="Settings" component={SettingsScreen} />  */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Authstack

const styles = StyleSheet.create({})