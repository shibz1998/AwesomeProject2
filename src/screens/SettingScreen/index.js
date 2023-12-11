import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {EventEmitter} from 'events';
import {BackHandler} from 'react-native';
export const eventEmitter = new EventEmitter();

const SettingsScreen = props => {
  const handleBack = () => {
    eventEmitter.emit('backEvent', {myData: 'Hello, Home!'});
    Navigation.pop(props.componentId);
  };

  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
      <Text>{props.myString}</Text>
      <Button title="Go Back" onPress={handleBack} />
    </View>
  );
};

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
  bottomTab: {
    text: 'Settings',
  },
};

export default SettingsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
