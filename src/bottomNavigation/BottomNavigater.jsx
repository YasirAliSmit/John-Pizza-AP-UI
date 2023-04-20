import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingScreen';
import Gallery from './Gallery';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();
const BottomNavigater = () => {
  return (
    <Tab.Navigator>
     
           <Tab.Screen  name="Home" options={{headerShown:false,  tabBarIcon: ({ color, size }) => (
             <AntDesign  name="home" color={'red'} size={size} />
             ),}} component={HomeScreen}/>
      <Tab.Screen name="Profile" options={{headerShown:false,  tabBarIcon: ({ color, size }) => (
        <AntDesign name="profile" color={'red'} size={size} />
        ),}} component={Gallery} />
        <Tab.Screen name="Settings" options={{headerShown:false , tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" color={'red'} size={size} />
            ),}} component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavigater