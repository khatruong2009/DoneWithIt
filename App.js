import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {

  const [bill, setBill] = useState(0);

  // const DismissKeyboard = ({children}) => (
  //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //     {children}
  //   </TouchableWithoutFeedback>
  // )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Image source={{width: 200, height: 200, uri: "https://picsum.photos/id/1025/200/300"}}></Image>
        <Text style={{fontWeight: "bold"}}>Tip Calculator</Text>
        <Text>Full Bill Amount: </Text>
        <TextInput 
          type={"number"} 
          style={styles.input} 
          keyboardType={'decimal-pad'} 
          onChangeText={(number) => {setBill(number)}}>  
        </TextInput>
        <Text>{bill}</Text>
        <Button onPress={() => setCounter(counter + 1)} title="Tap Me"></Button>
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
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    width: 200,
  }
});
