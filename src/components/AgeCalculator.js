import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const AgeCalculator = () => {
  console.log('Entering AgeCalulator');
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const birthYearInt = parseInt(birthYear, 10);

    if (isNaN(birthYearInt)) {
      setAge('Please enter a valid year');
    } else {
      const calculatedAge = currentYear - birthYearInt;
      setAge(`You are ${calculatedAge} years old.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ageText}>{age}</Text>
      <Text style={styles.instructions}>Enter your birth year:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY"
        value={birthYear}
        onChangeText={text => setBirthYear(text)}
        keyboardType="numeric"
      />
      <Button title="Calculate Age" onPress={calculateAge} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  ageText: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default AgeCalculator;
