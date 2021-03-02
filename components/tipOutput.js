import React, { useState } from 'react'
import { StyleSheet, Text, Button, SafeAreaView, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function TipOutput (props) {
  return (
    <View>
        
      <Text style={{display: props.hidden? "none" : "flex"}}>The total bill is ${props.total}.</Text>
      <Text style={{display: props.hidden? "none" : "flex"}}>The cost per person is ${props.person}.</Text>

      <Text>{props.test}</Text>

    </View>
  )
}