import React from 'react';

import { createStackNavigator } from 'react-navigation';
import LogIn from './logIn-container';
import LogInConfirm from './logInConfirm-container';

const AppNavigator = createStackNavigator({
    LogIn: { screen: LogIn},
    LogInConfirm: { screen: LogInConfirm},
},
{
  initialRouteName: "LogIn",
  headerMode: 'none'
}
)

export default AppNavigator;