import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import Eyeopen from 'react-native-vector-icons/dist/Ionicons';
const TextinpComponent = ({holder,onchange,keytype,eyepress,iconvisible,Securetext}) => {
  return (
    <View style={{marginTop:moderateVerticalScale(15)}}>
        <View style={{flexDirection:'row'}}>

      <TextInput
            placeholder={holder}
            placeholderTextColor={'black'}
            style={{color: 'black', padding: moderateScale(10),marginTop:moderateVerticalScale(15),fontFamily:'Poppins-Regular',flex:1}}
            onChangeText={onchange}
            keyboardType={keytype}
            secureTextEntry={Securetext}
            />
            <TouchableOpacity style={{alignSelf:'center',padding:moderateScale(10)}} onPress={eyepress} >
            {
                iconvisible ? Securetext ?<Eyeopen name="eye" size={moderateScale(20)} color="black" />:<Eyeopen name="eye-off" size={moderateScale(20)} color="black" />:null
            
            }
            </TouchableOpacity>
            </View>
          <LinearGradient
            colors={['rgba(165,101,255,1)', 'rgba(194,125,254,1)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{height: moderateScale(3), borderRadius: moderateScale(10)}}
          />
    </View>
  )
}

export default TextinpComponent

const styles = StyleSheet.create({})