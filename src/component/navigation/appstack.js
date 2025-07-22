import { StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Home from '../home/home';
import Product from '../home/product';
import Trackorder from '../home/trackorder';
import Usercart from '../home/usercart';
import Profile from '../home/profile';
import Setting from '../home/setting';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Homestack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Homescreen" component={Home} />
      <Stack.Screen name="product" component={Product} />
    </Stack.Navigator>
  );
};

const Appstack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            } else if (route.name === 'UserCart') {
              iconName = 'shopping-cart';
            } else if (route.name === 'TrackOrder') {
              iconName = 'map';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle: styles.tabBarLabelStyle,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Homestack} />
        <Tab.Screen name="UserCart" component={Usercart} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="TrackOrder" component={Trackorder} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Appstack;

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'green',
  },
  tabBarLabelStyle: {
    paddingBottom: 5,
    fontSize: 12,
    marginBottom: 5,
  },
});
