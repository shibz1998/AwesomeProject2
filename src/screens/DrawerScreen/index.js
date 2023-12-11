import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

const DrawerComponent = props => {
  const navigateToScreen = screenName => {
    Navigation.push(props.componentId, {
      component: {
        name: screenName,
      },
    });
  };

  return (
    <View style={styles.root}>
      <Text>Drawer Menu</Text>
      <Button title="Screen A" onPress={() => navigateToScreen('')} />
      <Button title="Screen B" onPress={() => navigateToScreen('')} />
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'whitesmoke',
    paddingTop: 50,
  },
});
