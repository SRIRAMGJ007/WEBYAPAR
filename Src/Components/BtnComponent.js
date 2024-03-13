import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient'

const BtnComponent = ({BtnName,btnpress}) => {
  return (
    <LinearGradient
              colors={['rgba(165,101,255,1)', 'rgba(194,125,254,1)']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{margin:moderateScale(30),height:moderateScale(50),lignItems:'center',borderRadius:scale(10),justifyContent:'center'}}
              >

      <TouchableOpacity onPress={btnpress} >
        <Text style={{color:'white',fontFamily:'Poppins-SemiBold',borderRadius:scale(20),textAlign:'center'}} >{BtnName}</Text>
      </TouchableOpacity>
              </LinearGradient>
  )
}

export default BtnComponent

const styles = StyleSheet.create({})