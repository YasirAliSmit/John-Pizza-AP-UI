import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import One from './One';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import image from '../assets/thin.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const HomePizza = ({navigation}) => {
  var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      height: responsiveHeight(15),
      width: responsiveWidth(100),
    },
    linearGradients: {
      borderRadius: responsiveWidth(5),
      marginLeft: responsiveWidth(33),
      marginTop: responsiveHeight(15),
      height: responsiveHeight(5),
      width: responsiveWidth(30),
    },
    buttonText: {
      fontSize: responsiveFontSize(2),
      fontFamily: 'Gill Sans',
      paddingTop: responsiveHeight(1),
      paddingBottom: responsiveHeight(1),
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    buttonTexts: {
      fontSize: responsiveFontSize(2.5),
      fontFamily: 'Roboto',
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(2.5), // set the font size as desired
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    border: {
      borderLeftWidth: 1,
      borderLeftColor: 'white',
      paddingLeft: responsiveWidth(2),
    },
    item: {
      width: responsiveWidth(90),
      height: responsiveHeight(21),
      borderRadius: responsiveWidth(5),
      marginTop: responsiveHeight(1),
      position: 'absolute',
      zIndex: 3,
      top: responsiveHeight(12),
      alignSelf: 'center',
      backgroundColor: 'white',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      height: responsiveHeight(22),
      resizeMode: 'contain',
      position: 'absolute',
      left: -25,
    },
    imgtext: {
      color: 'red',
      fontWeight: '400',
      position: 'absolute',
      top: responsiveHeight(3),
      left: responsiveWidth(35),
      fontFamily: 'Alkatra-Regular',
      fontSize: responsiveFontSize(3),
    },
    imgtext1: {
      color: 'black',
      fontWeight: '400',
      position: 'absolute',
      top: responsiveHeight(8),
      left: responsiveWidth(35),
      fontFamily: 'Alkatra-Regular',
      fontSize: responsiveFontSize(1.5),
      letterSpacing: 2,
    },
    imgtext2: {
      color: 'black',
      fontWeight: '400',
      position: 'absolute',
      top: responsiveHeight(10),
      left: responsiveWidth(35),
      fontFamily: 'Alkatra-Regular',
      fontSize: responsiveFontSize(1.5),
      letterSpacing: 2,
    },
    imgtext3: {
      color: 'green',
      fontWeight: '400',
      position: 'absolute',
      top: responsiveHeight(12),
      left: responsiveWidth(35),
      fontFamily: 'Alkatra-Regular',
      fontSize: responsiveFontSize(2),
      letterSpacing: 2,
    },
    btntext: {
      textAlign: 'center',
      marginTop: responsiveHeight(1),
      color: 'white',
      fontFamily: 'Alkatra-Regular',
      fontSize: responsiveFontSize(2),
      letterSpacing: 2,
    },
    box1: {
      backgroundColor: 'white',
      width: responsiveWidth(90),
      height: responsiveHeight(50),
      borderRadius: responsiveWidth(5),
      marginTop: responsiveHeight(25),
      alignSelf: 'center',
    },
    create: {
      width: responsiveWidth(70),
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: responsiveHeight(2),
    },
    pizza: {
      width: responsiveWidth(90),
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: responsiveHeight(-3.5),
    },
  });
  return (
    <View>
      
      <Stack.Navigator>
    
        <Stack.Screen name="One" options={{headerShown:false}} component={One} />
      
      </Stack.Navigator>
 
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#F5313F', '#FFA360']}
        style={styles.linearGradient}>
        <View>
          <Text style={styles.buttonText}>Hi Jaykey!</Text>
          <View style={styles.border}>
            <Text style={styles.buttonTexts}>What pizza do you </Text>
            <Text style={styles.buttonTexts}>want to try today?</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.item}>
        <Image style={styles.img} source={require('../assets/thin.png')} />
        <Text style={styles.imgtext}>Reorder again?</Text>
        <Text style={styles.imgtext1}>Small, thin crust,</Text>
        <Text style={styles.imgtext2}>tomatoes, basil, cheese</Text>
        <Text style={styles.imgtext3}>$ 12</Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#F5313F', '#FFA360']}
          style={styles.linearGradients}>
          <TouchableOpacity
      
      onPress={() => navigation.navigate('One')}
            colors={['#F5313F', '#FFA360']}
            style={styles.btn1}>
            <Text style={styles.btntext}>Add To Cart</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.box1}>
        <View>
          <Image
            style={styles.create}
            source={require('../assets/Header.png')}
          />
          <Image
            style={styles.pizza}
            source={require('../assets/pizza2.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default HomePizza;

const styles = StyleSheet.create({});
