import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TipInput from "./components/tipInput";
import TipOutput from "./components/tipOutput";

export default function App() {

  const [resultTip, setResultTip] = useState(0);
  const [resultTotal, setResultTotal] = useState(0);
  const [resultPerson, setResultPerson] = useState(0);

  const [hidden, setHidden] = useState(true);

  // handle calculations
  const handlePress = (bill, tip, people) => {
    setResultTip(bill * (tip / 100));
    setResultTotal(bill);
    setResultPerson(people);

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

        <TipInput calculate={handlePress} testPress={testPress} />  
        
        <TipOutput test={test} hidden={hidden} total={resultTotal} person={resultPerson} />

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
