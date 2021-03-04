import React, { useState } from 'react'
import { StyleSheet, Text, View, } from 'react-native';

export default function TipOutput (props) {
  return (
    <View>
        
      <Text style={styles.result, {display: props.hidden? "none" : "flex", fontSize: 25}}>The total bill is ${props.total}.</Text>
      <Text style={styles.result, {display: props.hidden? "none" : "flex", fontSize: 25}}>The cost per person is ${props.person}.</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  result: {
    fontSize: 20,
  }
});