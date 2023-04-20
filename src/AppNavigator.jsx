import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Normal/Splash';
import Parent from './Normal/Parent';
import One from './Screen/One';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash} />
        <Stack.Screen name="Parent" options={{headerShown:false}} component={Parent} />
        <Stack.Screen name="One" options={{headerShown:false}} component={One} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator