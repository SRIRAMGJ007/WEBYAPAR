import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = () => {
  return (
    <LinearGradient
      colors={['rgba(165,101,255,1)', 'rgba(194,125,254,1)']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: scale(30),
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            fontFamily: 'Poppins-Medium',
            fontSize: scale(20),
          }}>
          Signup
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderTopLeftRadius: scale(25),
          borderTopRightRadius: scale(25),
        }}>
        <View style={{margin: moderateScale(20), flex: 1}}>
          <Text style={{color: 'black', fontFamily: 'Poppins-SemiBold',fontSize:scale(15),padding:moderateScale(10)}}>
            If u already have an account registered you can
            
              <Text style={{color: 'black', color:'rgba(194,125,254,1)'}} >    Login here!</Text>
            
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
