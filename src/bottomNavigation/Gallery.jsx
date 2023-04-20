import {View, Text, Image} from 'react-native';
import React from 'react';
import img from '../assets/Ellipse4.png';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
const CustomDrower = () => {
  const style = {
    name: {
      fontFamily: 'Alkatra-Bold',
      textAlign: 'center',
      fontSize: responsiveScreenFontSize(3)
      ,color:'black'
    },
    email: {
      fontFamily: 'Alkatra-SemiBold',
      fontSize: responsiveScreenFontSize(2),
      textAlign: 'center'
      ,color:'black'
    },
    user: {
      height: responsiveHeight(15),
      marginLeft: responsiveWidth(7),
    },
    userInfo: {
      width: responsiveWidth(75),
      backgroundColor: '#F4F3F9',
      height: responsiveHeight(40),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:responsiveHeight(10)
    },
    infoData: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      width: '100%',
      marginTop:responsiveHeight(3)
    },
    infoDataText:{
      marginRight:responsiveWidth(12),
      fontFamily:'Alkatra-SemiBold'
      ,color:'black'
    },
    usericon:{
      marginRight:responsiveWidth(14),
    },
    history:{
      marginRight:responsiveWidth(6),

    }
    ,  address:{
      marginRight:responsiveWidth(12),
      
    },
    help:{
      marginRight:responsiveWidth(8),
      
    },
    footicon:{
      marginRight:responsiveWidth(9),

    },footer:{
      marginTop:responsiveHeight(5)
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
      }}>
      <View>
        <Image style={style.user} source={require('../assets/Ellipse4.png')} />
        <Text style={style.name}>Jaykey del Mars</Text>
        <Text style={style.email}>janedone@gmail.com</Text>
      </View>
      <View style={style.userInfo}>
        <View style={style.infoData}>
          <AntDesign style={style.usericon} name="user" color="red" size={20} />
          <Text style={style.infoDataText} >Profile</Text>
        </View>
        <View style={style.infoData}>
          <MaterialIcons name="payments" color="red" size={20} />
          <Text style={style.infoDataText} >Payment Method</Text>
        </View>
        <View style={style.infoData}>
          <FontAwesome style={style.history} name="history" color="red" size={20} />
          <Text style={style.infoDataText} >Order History</Text>
        </View>
        <View style={style.infoData}>
          <Feather style={style.address} name="map-pin" color="red" size={20} />
          <Text style={style.infoDataText} >Address</Text>
        </View>
        <View style={style.infoData}>
          <Feather style={style.help} name="help-circle" color="red" size={20} />
          <Text style={style.infoDataText} >Help Center</Text>
        </View>
      </View>
      <View style={style.footer}>
      <View style={style.infoData}>
      <AntDesign style={style.footicon} name="setting" color="red" size={20} />
        <Text style={style.infoDataText}>Setting</Text>
      </View>
      <View style={style.infoData}>
        
      <AntDesign style={style.footicon}  name="logout" color="red" size={20} />
        <Text style={style.infoDataText}>Log Out</Text>
      </View>
      </View>
    </View>
  );
};

export default CustomDrower;
