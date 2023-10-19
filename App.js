/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import MyTestComponent from './src/components/MyTestComponent';
import TestComponent from './src/components/TestComponent';
//import YearChecker from './src/components/YearChecker';
import MyTestFuncComponent from './src/components/MyTestFuncComponent';
import StateFunc from './src/components/StateFunc';
import UserInput from './src/components/UserInput';

import AgeCalculator from './src/components/AgeCalculator';

function App() {
  console.log('Running Main App--------');

  return (
    <View style={{flex: 1, marginTop: 30, marginHorizontal: 10}}>
      <ScrollView>
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Welcome to My App</Text>
          <YearChecker />
        </View> */}
        {/* <TestComponent name="Shiblu" yearborn={2001} /> */}
        {/* <Text>First Name</Text>
        <TextInput style={{height: 40, backgroundColor: '#c1bbfb'}} />

        <Text>Last Name</Text>
        <TextInput style={{height: 40, backgroundColor: '#c1bbfb'}} />

        <Text>City</Text>
        <TextInput style={{height: 40, backgroundColor: '#c1bbfb'}} />

        <Text>Country</Text>
        <TextInput style={{height: 40, backgroundColor: '#c1bbfb'}} /> */}
        {/* <Button
          title={'Submit'}
          onPress={() => {
            Alert.alert('Success', 'Form Submitted');
            console.log('Button Pressed');
          }}
        /> */}
        {/* <TouchableOpacity>
          <Image
            source={{
              width: 200,
              height: 300,
              marginVertical: 20,
              uri: 'https://picsum.photos/200/300',
            }}
          />
        </TouchableOpacity> */}
        {/* <MyTestComponent bgColor="pink" testKey="testValue" />
        <MyTestFuncComponent bgColor="yellow" score={99} /> */}
        <StateFunc />
        <UserInput />

        <AgeCalculator />
      </ScrollView>
    </View>
  );
}

export default App;
