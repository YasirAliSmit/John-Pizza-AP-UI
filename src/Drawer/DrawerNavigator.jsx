import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import Home from './Home';
import CustomDrower from './CustomDrower';
import HomeScreen from '../bottomNavigation/HomeScreen';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrower {...props}/>} >
    <Drawer.Screen name="Main" options={{headerShown:false}} component={Main} />
    <Drawer.Screen name="Home" options={{headerShown:false}} component={Home} />
    <Drawer.Screen name="HomeScreeen" options={{headerShown:false}} component={HomeScreen} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigator