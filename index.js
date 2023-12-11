import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import DrawerComponent from './src/screens/DrawerScreen';
import SettingsScreen from './src/screens/SettingScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Drawer', () => DrawerComponent);

const mainRoot = {
  root: {
    sideMenu: {
      left: {
        component: {
          name: 'Drawer',
        },
      },
      center: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Home',
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Settings',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
};

const loginRoot = {
  root: {
    component: {
      name: 'Login',
    },
  },
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'red',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isLoggedIn() ? mainRoot : loginRoot);
});

function isLoggedIn() {
  return true;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
