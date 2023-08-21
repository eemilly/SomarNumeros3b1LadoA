import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';

const App = ()=> {
   const [inputValues, setInputValues] = useState({
   input1: '',  
   input2: '',
   input3: '',
   input4: '',
   input5: '',
   input6: '',
   });

   const[sum, setsum] = useState(0);  

   const handleInputChange = (inputName, value) => {
    setInputValues({...inputValues, [inputName]: value
    }); 
   };
   const handleSum = () => {
    const {input1, input2, input3, input4, input5} = inputValues; 
    const result =parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5); 
    setsum(result); 
   }; 

  return (
   <View style={styles.container}> 
   <Text style={styles.label}>Input1:</Text> 
   <TextInput
   style={styles.input}
   onChangeText={(value) => handleInputChange('input1', value)}
   value={inputValues.input1}
   keyboardType="numeric"
   />
  
   <Text style={styles.label}>Input2:</Text> 
   <TextInput
   style={styles.input2}
   onChangeText={(value) => handleInputChange('input2', value)}
   value={inputValues.input2}
   keyboardType="numeric"
   /> 
    
  <Text style={styles.label}>Input3:</Text>
  <TextInput
  style={styles.input3}
  onChangeText={(value) => handleInputChange('input3', value)}
  value={inputValues.input3}
  keyboardType="numeric"
  />


<Text style={styles.label}>Input4:</Text> 
   <TextInput
   style={styles.input4}
   onChangeText={(value) => handleInputChange('input4', value)}
   value={inputValues.input4}
   keyboardType="numeric"
   /> 


<Text style={styles.label}>Input5:</Text> 
   <TextInput
   style={styles.input5}
   onChangeText={(value) => handleInputChange('input5', value)}
   value={inputValues.input5}
   keyboardType="numeric"
   /> 


   <Button title="Somar" onPress={handleSum}/> 
   <Text style={styles.result}>Resultado: {sum}</Text>
   </View>
  );

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    padding: 20, 
   
   
  },
}); 

export default App;