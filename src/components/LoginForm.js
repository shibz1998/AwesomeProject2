import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = text => {
    setUsername(text);
    console.log(username);
  };

  const handlePasswordChange = text => {
    setPassword(text);
    console.log(password);
  };

  const handleVerifyPasswordChange = text => {
    setVerifyPassword(text);
    console.log(verifyPassword);
  };

  const validate = () => {
    if (username === '' || password === '' || verifyPassword === '') {
      setMessage('*Please Fill the Blanks*');
    } else if (password !== verifyPassword) {
      setMessage('*Password Do not match*');
    } else {
      setMessage(
        `Welcome, ${username}!, your password is ${password}. You have successfully logged in `,
      );
      return true;
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#c1bbfb',
        }}>
        <Text style={styles.titleText}>LOGIN FORM</Text>
        <Text>{'\n'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Username"
          value={username}
          onChangeText={handleUsernameChange}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={handlePasswordChange}
        />

        <TextInput
          style={styles.input}
          placeholder="verify password"
          value={verifyPassword}
          onChangeText={handleVerifyPasswordChange}
        />

        <Button
          title={'Submit'}
          onPress={() => {
            validate();
            if (validate() === false) {
              Alert.alert('Success', 'Form Submitted');
            }
          }}
        />

        <Text titleText>{message}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default LoginForm;
