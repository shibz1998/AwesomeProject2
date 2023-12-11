import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {eventEmitter} from '../SettingScreen';

const HomeScreen = props => {
  const [dataFromSettings, setDataFromSettings] = useState(null);

  useEffect(() => {
    const listener = eventEmitter.on('backEvent', data => {
      setDataFromSettings(data.myData);
    });

    return () => {
      listener.remove(); // Clean up the listener when the component unmounts
    };
  }, []);

  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>

      {dataFromSettings && <Text>Data from Settings: {dataFromSettings}</Text>}

      <Button
        title="Push Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
            },
          })
        }
      />

      <Button
        title="Push Data to Setting Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
              passProps: {
                myString: 'Hello, Data Passed from Home Screen',
              },
            },
          })
        }
      />
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
