import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const UserInput = () => {
  const [name, setName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleInputChange = text => {
    setName(text);
  };

  const handleShowWelcome = () => {
    setShowWelcome(true);
  };

  return (
    <View>
      <Text>Welcome to My App</Text>
      <TextInput
        placeholder="Enter your name for welcome screen"
        value={name}
        onChangeText={handleInputChange}
      />
      <Button title="Show Welcome" onPress={handleShowWelcome} />
      {showWelcome && <Text>Welcome, {name}!</Text>}
    </View>
  );
};

export default UserInput;
