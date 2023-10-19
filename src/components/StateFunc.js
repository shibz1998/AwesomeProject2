import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const StateFunc = props => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  console.log('Running StateComponent');
  return (
    <View>
      <Text>This is a Counter State Component {count}</Text>

      <Button title="Increment" onPress={increment} />
    </View>
  );
};

export default StateFunc;
