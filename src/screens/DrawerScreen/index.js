import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DrawerComponent = () => {
  return (
    <View style={styles.root}>
      <Text>Drawer Menu</Text>
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
