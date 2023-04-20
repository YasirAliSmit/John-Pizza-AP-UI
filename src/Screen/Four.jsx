import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FooterC from './FooterC';
import {BlurView} from '@react-native-community/blur';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import image from '../assets/thin.png';
import Navbar from './Navbar';
import FooterDone from './Footerdone';
const Four = () => {
  const styles = StyleSheet.create({
    pizzaIcon: {
      marginTop: responsiveHeight(3),
      marginLeft: responsiveWidth(8),
    },
    rectangle: {
      /////   width:responsiveWidth(0)
      marginTop: responsiveHeight(16),
    },
    choose: {
      fontFamily: 'Roboto',
      fontFamily: 'Roboto-Light',
      textAlign: 'center',
      fontSize: responsiveFontSize(2.9),
    },

    linearGradients: {
      borderRadius: responsiveWidth(5),

      elevation: 200,
      marginTop: responsiveHeight(2),
      height: responsiveHeight(20),
      width: responsiveWidth(0),
    },
    linearGradient: {
      position: 'relative',
      borderRadius: 5,
      height: responsiveHeight(20),
      width: responsiveWidth(100),
      flexDirection: 'column',
      zIndex: 2,
      backgroundColor: 'black',
    },
    linearGradientss: {
      elevation: 200,
      position: 'absolute',
      elevation: 100,
      height: responsiveHeight(70),
      width: responsiveWidth(80),
      borderRadius: responsiveWidth(0),
      top: responsiveHeight(8),
      left: responsiveWidth(20),
      borderTopLeftRadius: responsiveWidth(80),
      borderBottomLeftRadius: responsiveWidth(80),
    },

    pizz: {
      right: responsiveWidth(18),
      height: responsiveHeight(53),
      top: responsiveHeight(-15),
      height: responsiveHeight(80),
      resizeMode: 'contain',
    },
    round: {
      position: 'absolute',

      height: responsiveHeight(50),
      width: responsiveWidth(92),
      borderRadius: responsiveWidth(60),
      top: responsiveHeight(20),
      left: responsiveWidth(35),
      backgroundColor: '#FFFFFF',
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
      fontWeight: 'bold',
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(3), // set the font size as desired
      color: '#ffffff',
      backgroundColor: 'transparent',
      paddingHorizontal: 25,
      marginTop: responsiveHeight(0),
    },
    size: {
      marginTop: responsiveHeight(10),
      width: responsiveWidth(90),
      height: responsiveHeight(20),
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: responsiveWidth(6),
      elevation: 200,
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
    pepp: {
      marginTop: responsiveHeight(2),
      borderRadius: responsiveWidth(5),
      width: responsiveWidth(55),
      height: responsiveHeight(10),
      position: 'relative',
      marginLeft: responsiveWidth(2),
      marginRight: responsiveWidth(2),
      elevation: 100,
    },
    rectangleParent: {
      position: 'relative',
    },
    ordertxt: {
      position: 'absolute',
      top: responsiveHeight(25),
      color: 'red',
      fontFamily: 'Alkatra-Regular', // or any other font family with a skinny style
      fontWeight: 'bold',
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(1.8),
      left: responsiveWidth(4),
    },
    cart: {
      position: 'absolute',
      top: responsiveHeight(21),
      left: responsiveWidth(8),
    },
    pizzaSizes: {
      position: 'absolute',
      top: responsiveHeight(50),
      left: responsiveWidth(4),
    },
    prices: {
      position: 'absolute',
      top: responsiveHeight(50),
      left: responsiveWidth(48),
    },
    total:{
      position:'absolute',
      top: responsiveHeight(70),
      left: responsiveWidth(5),
      flexDirection:'row'
      
    }
    ,totaltxt:{
      fontSize:responsiveFontSize(2),

    },totalprice:{
      fontSize:responsiveFontSize(3),
      
      marginLeft:responsiveWidth(25)
    }
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
          <FontAwesome5
            style={styles.pizzaIcon}
            color="white"
            size={30}
            name="pizza-slice"
          />
          <Text style={styles.buttonTexts}>Check Your </Text>
          <Text style={styles.buttonTexts1}>Custom pizza</Text>
          <LinearGradient
            colors={['#FFFFFF89', '#FFFFFF99']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0}}
            style={styles.linearGradientss}
          />
          <View style={styles.round}>
            <Image
              style={styles.pizz}
              source={require('../assets/pizzaAss.png')}
            />
          </View>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.rectangle}
              source={require('../assets/Rectangle.png')}
            />
            <FontAwesome5
              style={styles.cart}
              color="red"
              size={20}
              name="shopping-cart"
            />
            <Text style={styles.ordertxt}>ORDER SUMMARY</Text>
          </View>
          <View style={styles.pizzaSizes}>
            <Image source={require('../assets/size.png')} />
          </View>
          <View style={styles.prices}>
            <Text>$10.00</Text>
            <Text>$4.00</Text>
            <Text>$0.00</Text>
            <Text>$0.00</Text>
            <Text>$0.00</Text>
            <Text>$0.50</Text>
          </View>
        <View  style={styles.total}>
          <Text  style={styles.totaltxt}>Total:</Text>
          <Text  style={styles.totalprice}>$14.50</Text>
        </View>
        </LinearGradient>
      </View>
      <View style={{marginTop:responsiveHeight(30)}}>

      <FooterC/>
      </View>
    </View>
  );
};

export default Four;
///shopping-cart
