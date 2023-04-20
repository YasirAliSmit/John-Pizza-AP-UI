import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import HomeScreen from '../bottomNavigation/HomeScreen';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Parent from './Parent';
const Splash = ({navigation}) => {
  useEffect(()=>{
      setTimeout(()=>{
        navigation.navigate('Parent');


      },2000)
  },[])
  const styles = StyleSheet.create({
    parent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rider: {
      width: responsiveWidth(130),
      resizeMode: 'contain',
      alignSelf: 'center',
    },
  });
  return (
    <View style={styles.parent}>
      <LinearGradient
        style={{flex: 1, width: '100%'}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#F5313F', '#FFA360']}>
        <Image style={styles.rider} source={require('../assets/pizza.png')} />
        <TouchableOpacity>
          <Text
            style={{
              padding: responsiveWidth(5),
              fontFamily: 'Alkatra-Regular',
              textAlign: 'center',
              color: 'white',
              fontSize: responsiveFontSize(4),
            }}>
            Welcome to John Pizza
          </Text>

          <Text
            style={{
              padding: responsiveWidth(5),
              fontFamily: 'Alkatra-Regular',
              textAlign: 'center',
              color: 'white',
              fontSize: responsiveFontSize(1.5),
            }}>
            Welcome to our food delivery app! Ordering food has never been
            easier. Here are a few simple steps to get started: Download our app
            from the App Store or Google Play.
          </Text>
        </TouchableOpacity>
   
      </LinearGradient>
    </View>
  );
};

export default Splash;
