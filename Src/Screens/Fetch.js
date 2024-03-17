import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ImgContext} from '../Context/Provider';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
const Fetch = () => {
  const {imgdata} = useContext(ImgContext);
  console.log(imgdata);
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
          Your images
        </Text>
      </View>
      <ScrollView>
        {imgdata.map((item, index) => (
          <View key={index}>
            <Image
              style={{
                height: 200,
                width: moderateScale(300),
                borderRadius: scale(10),
                alignSelf: 'center',
                margin: moderateScale(30),
              }}
              source={{uri: item.image}}
            />
            <Text style={{alignSelf: 'center',
                margin: moderateScale(30),color: 'black'}}>
              Latitude: {item.Lattitude} Longitude: {item.Longitude}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Fetch;

const styles = StyleSheet.create({});
