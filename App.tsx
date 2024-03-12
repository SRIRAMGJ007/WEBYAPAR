import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CentralNav from './Src/Navigation/CentralNav'

const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}} >
      <CentralNav/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})