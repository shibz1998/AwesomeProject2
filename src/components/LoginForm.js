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

  const passmatch = password === verifyPassword && username !== '';
  const message_Style = {color: passmatch ? 'green' : 'red'};

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
            if (validate() === true) {
              Alert.alert('Success', 'USER AUTHENTICATED');
            }
          }}
        />

        <Text style={message_Style}>{message}</Text>
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
  messageText: {
    color: 'green',
  },
});

export default LoginForm;

// //Chat Gpt CODE FOR IMPROVEMNT Below:
// //Chat Gpt CODE FOR IMPROVEMNT Below:
// //Chat Gpt CODE FOR IMPROVEMNT Below:

// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   TextInput,
//   Button,
//   ScrollView,
//   SafeAreaView,
//   StyleSheet,
//   Alert,
// } from 'react-native';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     verifyPassword: '',
//   });
//   const [message, setMessage] = useState('');

//   const handleInputChange = (key, text) => {
//     setFormData({
//       ...formData,
//       [key]: text,
//     });
//   };

//   const validate = () => {
//     if (
//       formData.username === '' ||
//       formData.password === '' ||
//       formData.verifyPassword === ''
//     ) {
//       setMessage('*Please Fill in All Fields*');
//     } else if (formData.password !== formData.verifyPassword) {
//       setMessage('*Passwords Do Not Match*');
//     } else {
//       setMessage(
//         `Welcome, ${formData.username}! You have successfully logged in.`,
//       );
//       return true;
//     }
//     return false;
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.titleText}>LOGIN FORM</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Your Username"
//         value={formData.username}
//         onChangeText={text => handleInputChange('username', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter password"
//         value={formData.password}
//         onChangeText={text => handleInputChange('password', text)}
//         secureTextEntry={true}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Verify password"
//         value={formData.verifyPassword}
//         onChangeText={text => handleInputChange('verifyPassword', text)}
//         secureTextEntry={true}
//       />
//       <Button
//         title="Submit"
//         onPress={() => {
//           if (validate()) {
//             Alert.alert('Success', 'Form Submitted');
//           }
//         }}
//       />
//       <Text style={styles.messageText}>{message}</Text>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#c1bbfb',
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: 'black',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   messageText: {
//     color: 'red',
//     marginTop: 10,
//   },
// });

// export default LoginForm;
