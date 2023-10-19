import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const YearChecker = () => {
  const [yearborn, setYearBorn] = useState(''); // State to store the birth year
  const [age, setAge] = useState(''); // State to store the calculated age

  // Function to calculate age
  const calculateAge = () => {
    if (yearborn && !isNaN(yearborn)) {
      const birthYear = parseInt(yearborn, 10);
      const currentYear = new Date().getFullYear();
      setAge(currentYear - birthYear);
    } else {
      setAge('Invalid year');
    }
  };

  return (
    <View style={{backgroundColor: 'lightgray', padding: 20}}>
      <Text>Enter your birth year:</Text>
      <TextInput
        placeholder="Year of birth"
        keyboardType="numeric"
        onChangeText={text => setYearBorn(text)}
        value={yearborn}
      />
      <Button title="Calculate Age" onPress={calculateAge} />
      <Text>{age === 'Invalid year' ? age : `Your age is: ${age}`}</Text>
    </View>
  );
};

export default YearChecker;
