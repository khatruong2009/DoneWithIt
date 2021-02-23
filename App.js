import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TextInput, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native';

export default function App() {

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const [resultTip, setResultTip] = useState();

  let resultTotal = 0;
  let resultPerson = 0;

  const handlePress = () => {
    setResultTip(bill * (tip/100));
    console.log(resultTip);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      {/* main container */}
      <SafeAreaView style={styles.container}>

        <Image source={{width: 200, height: 200, uri: "https://picsum.photos/id/1025/200/300"}}></Image>

        <Text style={{fontWeight: "bold", fontSize: 30}} maxFontSizeMultiplier={2}>Tip Calculator</Text>

        {/* Input Bill Amount */}
        <Text style={styles.inputHeader}>Full Bill Amount: </Text>

        <TextInput 
          type={"number"} 
          style={styles.input} 
          keyboardType={'decimal-pad'} 
          onChangeText={(number) => {setBill(number)}}>  
        </TextInput>

        {/* Input Tip Percentage */}
        <Text style={styles.inputHeader}>Tip Percentage: </Text>

        <TextInput 
          type={"number"} 
          style={styles.input} 
          keyboardType={'decimal-pad'} 
          onChangeText={(percent) => {setTip(percent)}}>  
        </TextInput>

        {/* Input Number of People */}
        <Text style={styles.inputHeader}>Number of People: </Text>

        <TextInput 
          type={"number"} 
          style={styles.input} 
          keyboardType={'decimal-pad'} 
          onChangeText={(number) => {setPeople(number)}}>  
        </TextInput>

        <Text>{resultTip}</Text>

        <Button onPress={handlePress} title="Calculate"></Button>

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
    justifyContent: 'center',
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
