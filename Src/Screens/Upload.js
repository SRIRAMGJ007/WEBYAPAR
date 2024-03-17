import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import BtnComponent from '../Components/BtnComponent';
import {launchCamera} from 'react-native-image-picker';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Submit_Form_Data} from '../API_Handler/User_api';
import {ImgContext} from '../Context/Provider'


const Upload = () => {
  const [imguri, setImguri] = useState(
    'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  );
  const [token, setToken] = useState(null);
  const [lattitude, setLattitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const {setimgdata} = useContext(ImgContext);

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('AccessToken');
        setToken(storedToken);
        console.log(storedToken);
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };

    retrieveToken();
  }, []);

  const openCamera = () => {
    launchCamera({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response);
        const selectedImageUri = response.assets[0].uri;
        setImguri(selectedImageUri);
        console.log('image', imguri);
        getLocation();
      }
    });
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(data => {
      setLattitude(data.coords.latitude);
      setLongitude(data.coords.longitude);
    });
  };
  
  const handleSubmit = async () => {
    try {
      console.log(imguri);
      console.log(longitude);
      console.log(lattitude);
      setimgdata(prevdata => [
        ...prevdata,
        { image: imguri, Lattitude : lattitude, Longitude : longitude }
      ]);
      
      const response = await Submit_Form_Data(
        latitude,
        longitude,
        imguri,
        token,
      );

      if (response.ok) {
        Alert.alert('Success', 'Image uploaded successfully');
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.message || 'Failed to upload image');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Alert.alert('Error', 'An error occurred while submitting the form');
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{marginTop: moderateVerticalScale(20)}}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontFamily: 'Poppins-SemiBold',
            fontSize: scale(18),
          }}>
          Upload Here
        </Text>
      </View>
      <BtnComponent BtnName={'Open Camera'} btnpress={openCamera} />
      <Image
        style={{
          height: 200,
          width: moderateScale(300),
          borderRadius: scale(10),
          alignSelf: 'center',
          margin: moderateScale(30),
        }}
        source={{uri: imguri}}
      />
      <BtnComponent BtnName={'Upload Image'} btnpress={handleSubmit} />
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({});
