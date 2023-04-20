import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import {TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import DropDownPicker from 'react-native-dropdown-picker';
import HomePizza from '../Screen/HomePizza';

const HomeScreen = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    Navbar: {
      flexDirection: 'row',
    },
    hamburger: {
      marginTop: responsiveHeight(1.5),
      marginLeft: responsiveWidth(2),
      marginRight: responsiveWidth(3),
    },
    deliver: {
      marginTop: responsiveHeight(2),
      marginLeft: responsiveWidth(2),
      fontFamily: 'Alkatra-Regular',
    },
    Home: {
      fontFamily: 'Rubik-ExtraBold',

      marginLeft: responsiveWidth(2),
    },
    shop: {
      marginTop: responsiveHeight(3),
      marginLeft: responsiveWidth(55),
      marginRight: responsiveWidth(3),
    },
    box: {
      marginTop: responsiveHeight(2),
      alignSelf: 'center',
      width: responsiveWidth(100),
      backgroundColor: 'white',
      height: responsiveHeight(45),
      borderRadius: responsiveHeight(2),
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    dropText: {
      fontFamily: 'Alkatra-Bold',
      alignSelf: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      fontWeight: 'bold',
      fontSize: 15,
    },
    icons: {
      marginRight: 30,
    },
    items: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      alignSelf: 'center',
    },
    itemsText: {
      fontFamily: 'Alkatra-Regular',

      paddingHorizontal: 30,
      color: 'black',
      fontWeight: '700',
      fontSize: 16,
    },
  };
  return (
    <View>
      <View style={styles.Navbar}>
        <TouchableOpacity
          style={styles.hamburger}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Ionicons name="menu-outline" color={'black'} size={35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
          <Text style={styles.deliver}>Delivery To</Text>
          <Text style={styles.Home}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shop}>
          <FontAwesome name="shopping-basket" color="black" size={20} />
        </TouchableOpacity>
      </View>
      <View style={{position: 'relative'}}>
        {isOpen ? (
          <View style={styles.box}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: 'white',
                width: '100%',
                paddingLeft: 80,
              }}>
              <FontAwesome name="location-arrow" color={'red'} size={20} />
              <Text style={styles.itemsText}>Current Location</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: '#DADAE5',
                width: '100%',
                paddingLeft: 80,
              }}>
              <FontAwesome name="home" color={'red'} size={20} />
              <Text style={styles.itemsText}>Home</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: '#DADAE5',
                width: '100%',
                paddingLeft: 80,
              }}>
              <Entypo name="location" color={'red'} size={20} />
              <Text style={styles.itemsText}>Other Location</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: '#DADAE5',
                width: '100%',
                paddingLeft: 80,
              }}>
              <FontAwesome name="briefcase" color={'red'} size={20} />
              <Text style={styles.itemsText}>Work</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: '#DADAE5',
                width: '100%',
                paddingLeft: 80,
              }}>
              <FontAwesome name="plus" color={'orange'} size={20} />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  color: 'orange',
                  paddingHorizontal: 30,
              
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                Add a new address
              </Text>
            </View>
          </View>
        ) : null}
        <View style={{position: 'absolute', left: 0, top: 0, zIndex: -1,marginTop:12}}>
          <HomePizza />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
