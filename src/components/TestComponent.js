import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TestComponent = props => {
  const {name, yearborn} = props;

  const age = 2023 - yearborn;

  return (
    <View style={{backgroundColor: '#c1bbfb'}}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>Welcome to My App 2</Text>
        {'\n'}
        {'\n'}
        <Text style={styles.titleText}>You were born in {yearborn} </Text>
        {'\n'}
        {'\n'}
        <Text style={styles.titleText}>You are {age} years Old</Text>
      </Text>
    </View>
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
});

export default TestComponent;
