import React, { useState } from 'react'
import { TouchableOpacity, Pressable, StyleSheet, Text, Button, SafeAreaView, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

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
        returnKeyType="done"
        onChangeText={(number) => {setBill(number)}}>  
      </TextInput>

      {/* Input Tip Percentage */}
      <Text style={styles.inputHeader}>Tip Percentage: </Text>

      <TextInput 
        value={tip}
        style={styles.input} 
        keyboardType={'decimal-pad'}
        returnKeyType="done" 
        onChangeText={(percent) => {setTip(percent)}}>  
      </TextInput>

      {/* Input Number of People */}
      <Text style={styles.inputHeader}>Number of People: </Text>

      <TextInput 
        value={people}
        style={styles.input} 
        keyboardType={'decimal-pad'} 
        returnKeyType="done"
        onChangeText={(number) => {setPeople(number)}}>  
      </TextInput>

      <TouchableOpacity style={styles.calcButton} onPress={handlePress} title="Calculate">
        <Text style={styles.calcButtonText}>Calculate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={reset} title="Reset">
        <Text>Reset</Text>
      </TouchableOpacity>

    </View>
    
  )
}

const styles = StyleSheet.create({
  calcButton: {
    backgroundColor: "skyblue",
    padding: 15,
    borderRadius: 25,
    width: 200,
    alignItems: "center",
    marginTop: 15,
  },
  calcButtonText: {
    fontSize: 20
  },  
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
  }, 
  resetButton: {
    backgroundColor: "lightcoral",
    borderRadius: 25,
    padding: 15,
    marginTop: 15,
    fontSize: 15,
    width: 150, 
    alignItems: "center",
  },
});