import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configure-store';
import StackNavigator from './containers/stackNavigator-container';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <StackNavigator />
    </Provider>
);

