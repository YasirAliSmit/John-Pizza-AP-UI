import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Footer from './Footer';
import {BlurView} from '@react-native-community/blur';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import image from '../assets/thin.png';
import Navbar from './Navbar';
const Two = () => {
  const styles = StyleSheet.create({
    choose: {fontFamily: 'Roboto', fontFamily: 'Roboto-Light',textAlign:'center',fontSize:responsiveFontSize(2.9)},

    linearGradients: {
      borderRadius: responsiveWidth(5),

      marginTop: responsiveHeight(2),
      height: responsiveHeight(5),
      width: responsiveWidth(30),
    },
    linearGradient: {
      position: 'relative',
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      height: responsiveHeight(10),
      width: responsiveWidth(100),
      flexDirection: 'row',
    },
    linearGradientss: {
      position: 'absolute',

      height: responsiveHeight(45),
      width: responsiveWidth(90),
      borderRadius: responsiveWidth(40),
      top: responsiveHeight(15),
      left: responsiveWidth(5),
    },
    pizz: {
      right: responsiveWidth(8),
      height: responsiveHeight(52),
      bottom: responsiveHeight(3),
    },
    round: {
      position: 'absolute',

      height: responsiveHeight(40),
      width: responsiveWidth(80),
      borderRadius: responsiveWidth(50),
      top: responsiveHeight(18),
      left: responsiveWidth(10),
      backgroundColor: 'white',
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },

    buttonTexts: {
      fontFamily: 'Roboto',
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(3), // set the font size as desired
      color: '#ffffff',
      backgroundColor: 'transparent',
      paddingHorizontal: 25,
      marginTop: responsiveHeight(2),
    },
    buttonTexts1: {
      fontFamily: 'Alkatra-Regular', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(3), // set the font size as desired
      color: '#ffffff',
      backgroundColor: 'transparent',
      paddingHorizontal: 25,
      marginTop: responsiveHeight(2),
      fontWeight: 'bold',
    },
    size: {
      marginTop: responsiveHeight(10),
      width: responsiveWidth(90),
      height: responsiveHeight(20),
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: responsiveWidth(6),    elevation:200
    },
    sizetxt: {
      fontSize: 25,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 6,
      color: 'black',
    },
    buttonTextss: {
      fontFamily: 'Roboto',
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(2.5), // set the font size as desired
      color: 'black',
      backgroundColor: 'transparent',
      paddingHorizontal: 25,
      marginTop: responsiveHeight(2),
    },
    medium: {
      fontFamily: 'Roboto',
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(2.5), // set the font size as desired
      color: '#ffffff',
      alignSelf: 'center',
      marginTop: responsiveHeight(0.5),
      
    },
    changeFont: {},
  });
  return (
    <View style={styles.navbar}>
      <Navbar />
      <View style={{height: responsiveHeight(50)}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#F5313F', '#FFA360']}
          style={styles.linearGradient}>
          <Text style={styles.buttonTexts}>Create Your Pizza</Text>
          <Text style={styles.buttonTexts1}>$12.00</Text>
          <LinearGradient
            colors={['#FFFFFF89', '#FFFFFF99']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0}}
            style={styles.linearGradientss}
          />
          <View style={styles.round}>
            <Image style={styles.pizz} source={require('../assets/pizz.png')} />
          </View>
        </LinearGradient>
      </View>
      <View style={styles.size}>
       <Text style={styles.choose}>Choose your <Text style={styles.sizetxt}>crust</Text> </Text>
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

      
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#F5313F', '#FFA360']}
            style={styles.linearGradients}>
            <TouchableOpacity style={styles.btn1}>
              <Text style={styles.medium}>Thin</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={styles.buttonTextss}>Thick</Text>

        </View>
      </View>
      <View >
        <Footer />
      </View>
    </View>
  );
};

export default Two;
