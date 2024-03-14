import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LinearGradient from 'react-native-linear-gradient';
import { scale } from 'react-native-size-matters';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const delay = 2000; 

    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('AccessToken');
        if (token) {
          navigation.replace('HomeStack');
        } else {
          navigation.replace('AuthStack');
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
        navigation.replace('AuthStack');
      }
    };

    const timeoutId = setTimeout(checkToken, delay);

    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000, 
        useNativeDriver: true,
      }
    ).start();

    return () => clearTimeout(timeoutId);
  }, [fadeAnim, navigation]);

  return (
    <LinearGradient
      colors={['rgba(165,101,255,1)', 'rgba(194,125,254,1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 0] 
            }),
          }],
        }}>
        <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: scale(25) }}>Splash</Text>
      </Animated.View>
    </LinearGradient>
  );
};

export default SplashScreen;
