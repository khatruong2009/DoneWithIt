import React, { useState } from 'react'
import { StyleSheet, Text, Button, SafeAreaView, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function TipInput(props) {

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const handlePress = () => {
    props.calculate(parseFloat(bill), parseFloat(tip), parseInt(people));
  };

  const reset = () => {
    props.appReset();

    setBill(0);
    setTip(0);
    setPeople(0);
  }

  return (
    <View style={styles.container}>

      <Text style={{fontWeight: "bold", fontSize: 30, marginBottom: 35}} maxFontSizeMultiplier={2}>Tip Calculator</Text>

      {/* Input Bill Amount */}
      <Text style={styles.inputHeader}>Full Bill Amount: </Text>

      <TextInput 
        value={bill}
        style={styles.input} 
        keyboardType={'decimal-pad'} 
        onChangeText={(number) => {setBill(number)}}>  
      </TextInput>

      {/* Input Tip Percentage */}
      <Text style={styles.inputHeader}>Tip Percentage: </Text>

      <TextInput 
        value={tip}
        style={styles.input} 
        keyboardType={'decimal-pad'} 
        onChangeText={(percent) => {setTip(percent)}}>  
      </TextInput>

      {/* Input Number of People */}
      <Text style={styles.inputHeader}>Number of People: </Text>

      <TextInput 
        value={people}
        style={styles.input} 
        keyboardType={'decimal-pad'} 
        onChangeText={(number) => {setPeople(number)}}>  
      </TextInput>

      <Button onPress={handlePress} title="Calculate"></Button>

      <Button onPress={reset} title="Reset"></Button>

    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 75,
  },
  inputHeader: {
    paddingTop: 15,
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    width: 200,
  }
});