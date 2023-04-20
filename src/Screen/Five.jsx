import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FiveFooter from './FiveFooter';
import Navbar from './Navbar';
const Five = () => {
  const styles = StyleSheet.create({
    linearGradient: {
      width: responsiveWidth(100),
      height: responsiveHeight(30),
      position: 'absolute',
    },

    cart: {
      position: 'absolute',
      top: responsiveHeight(5),
      left: responsiveWidth(8),
    },
    buttonTexts: {
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(5), // set the font size as desired
      color: '#ffffff',
      backgroundColor: 'transparent',
      paddingHorizontal: 25,
      marginTop: responsiveHeight(10),
      fontWeight: '100',
    },
    rectange: {
      height: responsiveHeight(50),
      position: 'absolute',
      top: responsiveHeight(20),
      left: responsiveWidth(3),
      elevation: 24,
      borderRadius: responsiveWidth(5),
    },
    location: {
      position: 'absolute',
      top: responsiveHeight(25),
      left: responsiveWidth(8),
    },
    rectangeles:{
      marginTop:responsiveHeight(3),
      position:'relative',
      elevation:24,
      borderRadius:responsiveWidth(6)
      ,width:responsiveWidth(90),
      alignSelf:'center',
      borderWidth:2,
      
      shadowColor: '#64646F',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.2,
      shadowRadius: 29,
    },
    Text: {
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(3.5), // set the font size as desired
      color: 'red',
      backgroundColor: 'transparent',
      marginTop: responsiveHeight(10),
      fontWeight: 'bold',
      position: 'absolute',
      paddingHorizontal: 25,
      top: responsiveHeight(14.5),
      left: responsiveWidth(12),
    },
    pen: {
      position: 'absolute',
      paddingHorizontal: 25,
      top: responsiveHeight(25),
      left: responsiveWidth(75),
    },
    parentHome: {
      position: 'absolute',
      paddingHorizontal: 25,
      top: responsiveHeight(35),
      left: responsiveWidth(5),
    },
    Home: {
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(2.4), // set the font size as desired
      color: 'black',
      backgroundColor: 'transparent',
      marginTop: responsiveHeight(1),
      fontWeight: 'bold',
    },
    road: {
      marginBottom: responsiveHeight(1.5),
    },
    deliveryAddress: {
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(2.4), // set the font size as desired
      color: 'black',
      backgroundColor: 'transparent',
      marginTop: responsiveHeight(48),
      marginLeft: responsiveWidth(7),
      fontWeight: 'bold',
      zIndex: 4,
    },
    contactless: {
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(2.3), // set the font size as desired
      color: 'black',
      backgroundColor: 'transparent',
      marginTop: responsiveHeight(4),
      marginLeft: responsiveWidth(12),
      fontWeight: 'bold',
    },
    contact: {
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(2), // set the font size as desired
      marginLeft: responsiveWidth(13),

      marginTop: responsiveHeight(0),
    },
    Payment:{
      fontFamily: 'Roboto-Light', // or any other font family with a skinny style
      // fontWeight: '100', // lower value for a thinner font weight
      fontSize: responsiveFontSize(2.5), // set the font size as desired
      color: 'red',
      backgroundColor: 'transparent',
      marginTop: responsiveHeight(10),
      fontWeight: 'bold',
      position: 'absolute',
      paddingHorizontal: 25,
      top: responsiveHeight(-4),
      left: responsiveWidth(12),
    }
    ,wallet:{
      position: 'absolute',
      top: responsiveHeight(6),
      left: responsiveWidth(8),
    },
    footerPen:{
      position: 'absolute',
      paddingHorizontal: 25,
      top: responsiveHeight(6.4),
      left: responsiveWidth(75),
    },
    visa:{
      position:'absolute',
      top:responsiveHeight(-23),
      left:responsiveWidth(2.9)
    },
    visaPrice:{
      
      position:'absolute',
      top:responsiveHeight(-23),
      left:responsiveWidth(70),
      fontWeight:'bold'
    },
    visatxt:{
      position:'absolute',
      top:responsiveHeight(-23),
      left:responsiveWidth(15),
      fontWeight:'bold'
    },
    cashBack:{
      position:'absolute',
      top:responsiveHeight(-19),
      left:responsiveWidth(5),
      borderWidth:responsiveWidth(0.4),
      borderColor:'#DEF3E1',
      backgroundColor:'#DEF3E1',
      borderRadius:responsiveWidth(4)
      
    },
    cashBackText:{
     fontSize:responsiveFontSize(1.5),
      fontWeight:'bold',
      color:'green',
      padding:2
    }
  });
  return (
    <View>
      <Navbar/>
    <View>
      <LinearGradient
        style={styles.linearGradient}
        colors={['#F5313F', '#FFA360']}>
        <FontAwesome5
          style={styles.cart}
          color="white"
          size={30}
          name="shopping-cart"
        />
        <Text style={styles.buttonTexts}>Checkout</Text>
        <Image style={styles.rectange} source={require('../assets/R.png')} />
        <Entypo
          style={styles.location}
          color="red"
          size={30}
          name="location-pin"
        />
        <Text style={styles.Text}>Delivery Address</Text>
        <FontAwesome5 style={styles.pen} color="red" size={20} name="pen" />
        <View style={styles.parentHome}>
          <Text style={styles.Home}>Home</Text>
          <Text style={styles.road}>3728 Brand Road, Swift Current</Text>
        </View>
      </LinearGradient>
      <View>
        <Text style={styles.deliveryAddress}>+ Add delivery instruction</Text>
        <Text style={styles.contactless}>Contactless Delivery</Text>
        <Text style={styles.contact}>Rider will place at your door</Text>
      </View>
      <View>
        <Image style={styles.rectangeles} source={require('../assets/Rect.png')}/>
        <Entypo
          style={styles.wallet}
          color="red"
          size={30}
          name="wallet"
        />
        <Text style={styles.Payment}>Payment Mathod</Text>
        <FontAwesome5 style={styles.footerPen} color="red" size={20} name="pen" />
        <View style={styles.parentHome}>
        
          <FontAwesome style={styles.visa} name='cc-visa' size={20} color="blue"/>
          <Text style={styles.visaPrice}>$14.50</Text>
          <Text style={styles.visatxt}>Visa</Text>
          <View style={styles.cashBack}>
            <Text style={styles.cashBackText}>10% CASHBACK APPLIED</Text>
          </View>
        </View>
      </View>
      <View >
        <FiveFooter/>
      </View>
    </View></View>
  );
};

export default Five;
