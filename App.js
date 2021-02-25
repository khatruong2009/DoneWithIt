import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const [resultTip, setResultTip] = useState(0);
  const [resultTotal, setResultTotal] = useState(0);
  const [resultPerson, setResultPerson] = useState(0);

  const [hidden, setHidden] = useState(true);

  // handle calculations
  const handlePress = () => {
    setResultTip(bill * (tip / 100));
    setResultTotal(parseFloat(bill) + parseFloat(resultTip));
    setResultPerson(resultTotal / people);

    alert(resultTotal);

    setHidden(false);
  }

  // TEST
  const [test, setTest] = useState(0);

  const testPress = () => {
    setTest(test + 1);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      {/* main container */}
      <SafeAreaView style={styles.container}>

        <Text style={{fontWeight: "bold", fontSize: 30, marginBottom: 35}} maxFontSizeMultiplier={2}>Tip Calculator</Text>

        {/* Input Bill Amount */}
        <Text style={styles.inputHeader}>Full Bill Amount: </Text>

        <TextInput 
          style={styles.input} 
          keyboardType={'decimal-pad'} 
          onChangeText={(number) => {setBill(number)}}>  
        </TextInput>

        {/* Input Tip Percentage */}
        <Text style={styles.inputHeader}>Tip Percentage: </Text>

        <TextInput 
          style={styles.input} 
          keyboardType={'decimal-pad'} 
          onChangeText={(percent) => {setTip(percent)}}>  
        </TextInput>

        {/* Input Number of People */}
        <Text style={styles.inputHeader}>Number of People: </Text>

        <TextInput 
          style={styles.input} 
          keyboardType={'decimal-pad'} 
          onChangeText={(number) => {setPeople(number)}}>  
        </TextInput>

        <Text style={{display: hidden? "none" : "flex"}}>The total bill is ${resultTotal}.</Text>
        <Text style={{display: hidden? "none" : "flex"}}>The cost per person is ${resultPerson}.</Text>

        <Button onPress={handlePress} title="Calculate"></Button>
        <Button onPress={testPress} title="Test Increase"></Button>
        <Text>{test}</Text>

        <StatusBar style="auto" />

      </SafeAreaView>

    </TouchableWithoutFeedback>
    
  );
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
