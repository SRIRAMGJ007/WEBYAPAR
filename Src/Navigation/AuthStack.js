// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';



const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    
  );
}

export default AuthStack;