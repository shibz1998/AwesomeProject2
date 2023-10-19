import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const UserInput = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleWelcome = () => {
    console.log(username);
    if (username === '') {
      setMessage('Enter your username');
    } else {
      setMessage(`Welcome, ${username}!`);
    }
  };

  const handleUsernameChange = text => {
    setUsername(text);
    setMessage(''); // Clear the welcome message
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <Button title="Welcome" onPress={handleWelcome} />
      <Text>{message}</Text>
    </View>
  );
};

export default UserInput;
