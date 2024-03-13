import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import TextinpComponent from '../Components/TextinpComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignIn = () => {
  const navigation = useNavigation();
  const [isvisible, setisvisible] = useState(true);
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');

  const HandleSignup = () => {
    console.log(email, password, name);
  };

  return (
    <LinearGradient
      colors={['rgba(165,101,255,1)', 'rgba(194,125,254,1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, backgroundColor: 'white' }}
    >
      <View
        style={{
          height: scale(30),
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            fontFamily: 'Poppins-Medium',
            fontSize: scale(20),
          }}
        >
          SignIn
        </Text>
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderTopLeftRadius: scale(25),
          borderTopRightRadius: scale(25),
        }}
      >
        <View style={{ margin: moderateScale(20), flex: 1 }}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Poppins-SemiBold',
              fontSize: scale(15),
              marginVertical: moderateVerticalScale(5),
              padding: moderateScale(10),
            }}
          >
            If you are new user then you can
            <Text
              style={{ color: 'black', color: 'rgba(194,125,254,1)' }}
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            >
              {' '}
              Register here!
            </Text>
          </Text>
          <TextinpComponent
            holder={'Enter Email'}
            onchange={(txt) => {
              setemail(txt);
            }}
          />
          
          <TextinpComponent
            holder={'Enter Password'}
            onchange={(txt) => {
              setpassword(txt);
            }}
            keytype={'numeric'}
            iconvisible={true}
            Securetext={isvisible}
            eyepress={() => {
              setisvisible(!isvisible);
            }}
          />
          <TouchableOpacity style={{ marginTop: moderateVerticalScale(100) }} onPress={HandleSignup}>
            <LinearGradient
              colors={['rgba(165,101,255,1)', 'rgba(194,125,254,1)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: moderateScale(50), borderRadius: moderateScale(20), alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ color: 'white', fontSize: scale(15), textAlign: 'center',fontFamily:'Poppins-SemiBold' }}>SignIn</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
