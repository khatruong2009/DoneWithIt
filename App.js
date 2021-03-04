import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TipInput from "./components/tipInput";
import TipOutput from "./components/tipOutput";

export default function App() {

  const [resultTotal, setResultTotal] = useState(0);
  const [resultPerson, setResultPerson] = useState(0);

  const [hidden, setHidden] = useState(true);

  var calcTip, calcTotalBill, calcPerson;

  // handle calculations
  const handlePress = (bill, tip, people) => {

    calcTip = bill * ( tip / 100);
    calcTotalBill = calcTip + bill;
    calcPerson = calcTotalBill / people;

    setResultTotal(calcTotalBill.toFixed(2));
    setResultPerson(calcPerson.toFixed(2));

    setHidden(false);
  }

  const appReset = () => {
    setHidden(true);

    setResultPerson(0);
    setResultTotal(0);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      {/* main container */}
      <SafeAreaView style={styles.container}>

        <Text style={{fontWeight: "bold", fontSize: 30, marginTop: 45}} maxFontSizeMultiplier={2}>Tip Calculator</Text>

        <TipInput appReset={appReset} calculate={handlePress} />  
        
        <TipOutput hidden={hidden} total={resultTotal} person={resultPerson} />

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
    marginTop: 55,
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
