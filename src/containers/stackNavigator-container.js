import React from 'react';

import { createStackNavigator } from 'react-navigation';
import LogIn from './logIn-container';
import LogInConfirm from './logInConfirm-container';
import MainScreen from './mainScreen-container';

const AppNavigator = createStackNavigator({
    LogIn: { screen: LogIn},
    LogInConfirm: { screen: LogInConfirm},
    MainScreen: { screen: MainScreen},
},
{
  initialRouteName: "MainScreen",
  headerMode: 'none'
}
)

export default AppNavigator;