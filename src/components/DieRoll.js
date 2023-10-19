import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const DieRoll = () => {
  //const roll = Math.floor(Math.random() * 6 + 1);

  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState(0);

  const addSum = () => {
    let roll = Math.floor(Math.random() * 6 + 1);

    setNumber(roll);
    setTotal(number + total);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>This is a Roll Die of {number}</Text>
      <Text>Total Count = {total}</Text>

      <Button title="Press me to get a new number" onPress={addSum} />
    </View>
  );
};

export default DieRoll;
