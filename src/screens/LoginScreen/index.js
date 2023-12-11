import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

const LoginScreen = props => {
  return (
    <View style={styles.root}>
      <Button
        title="Login"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Home',
            },
          })
        }
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
