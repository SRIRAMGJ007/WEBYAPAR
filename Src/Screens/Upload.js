import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';
import BtnComponent from '../Components/BtnComponent';
import { launchCamera } from 'react-native-image-picker';

const Upload = () => {
  const [imguri, setImguri] = useState("https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg")
  const handleImage = ()=>{

  }
  const openCamera = async () => {
    launchCamera({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response);
        const selectedImageUri = response.assets[0].uri;
        setImguri(selectedImageUri);
      }
    });
  };
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <View style={{marginTop:moderateVerticalScale(20)}} >
        <Text style={{color:'black',textAlign:'center',fontFamily:'Poppins-SemiBold',fontSize:scale(18)}} >Upload Here</Text>
      </View>
      <BtnComponent BtnName={"Open Camera"}btnpress={openCamera} />
      <Image style={{height:200,width:moderateScale(300),borderRadius:scale(10),alignSelf:'center',margin:moderateScale(30)}} source={{uri:imguri}} />
      
      <BtnComponent BtnName={"Upload Image"} btnpress={handleImage} />
    </View>
  )
}

export default Upload

const styles = StyleSheet.create({})