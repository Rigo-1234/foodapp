import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../home/home'

const Stack = createStackNavigator()

const Appstack = () => {
 return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
            {/* <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />  */}
        </Stack.Navigator>
  </NavigationContainer>
 )}

export default Appstack

const styles = StyleSheet.create({})