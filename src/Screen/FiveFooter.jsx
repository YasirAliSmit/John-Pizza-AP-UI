import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const FiveFooter = () => {
  const styles = StyleSheet.create({});
  return (
    <View
      style={{
        width: responsiveWidth(100),
        backgroundColor: 'red',
        marginTop: responsiveHeight(0),
        padding: responsiveHeight(0),
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#F5313F', '#FFA360']}>
        <TouchableOpacity colors={['#F5313F', '#FFA360']}>
          <Text
            style={{
              padding: responsiveWidth(5),
              fontFamily: 'Alkatra-Regular',
              textAlign: 'center',
              color: 'white',
              fontSize: responsiveFontSize(2.5),
            }}>
           Place Order
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default FiveFooter;

{
  /* <LinearGradient
start={{x: 0, y: 0}}
end={{x: 1, y: 0}}
colors={['#F5313F', '#FFA360']}
style={styles.linearGradients}>
<TouchableOpacity colors={['#F5313F', '#FFA360']} style={styles.btn1}>
  <Text style={styles.btntext}>Add To Cart</Text>
</TouchableOpacity>
</LinearGradient> */
}
