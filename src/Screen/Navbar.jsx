import {TouchableOpacity,StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const Navbar = () => {
  const styles = StyleSheet.create({
    home: {paddingVertical: 10, paddingLeft: responsiveWidth(20),paddingRight:responsiveWidth(2)},
    txt: {paddingVertical: 10, paddingLeft: responsiveWidth(10),fontFamily: 'Roboto-Light',paddingBottom:responsiveHeight(2.5)},
    arrow: {paddingVertical: 10,paddingRight: responsiveWidth(8),paddingLeft: responsiveWidth(1)},
  });

  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems:'center'
        
      }}>
        <TouchableOpacity>
     

        <AntDesign
          style={styles.arrow}
          name="arrowleft"
          color="black"
          size={25}
          />
  
          </TouchableOpacity>
      <Text style={styles.txt}>Uncle John Pizzas</Text>
     <TouchableOpacity>

      <View>
        <AntDesign style={styles.home} name="home" color="black" size={25} />
      </View>
     </TouchableOpacity>
 
    </View>
  );
};

export default Navbar;
