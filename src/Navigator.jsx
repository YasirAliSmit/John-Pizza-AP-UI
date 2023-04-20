import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Normal/Splash';
import Parent from './Normal/Parent';

import HomeScreen from './bottomNavigation/HomeScreen'
import HomePizza from './Screen/HomePizza';
import One from './Screen/One';
import Two from './Screen/Two';
import Three from './Screen/Three';
import Four from './Screen/Four';
import Five from './Screen/Five';
import Fivee from './Screen/Fivee';
const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash} />
        <Stack.Screen name="Parent" options={{headerShown:false}} component={Parent} />
        <Stack.Screen name="HomePizza" options={{headerShown:false}} component={HomePizza} />
        <Stack.Screen name="One" options={{headerShown:false}} component={One} />
        <Stack.Screen name="Two" options={{headerShown:false}} component={Two} />
        <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator