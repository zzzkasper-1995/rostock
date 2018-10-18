import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configure-store';
import Main from './containers/main-container';
import LogIn from './containers/logIn-container';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <LogIn />
    </Provider>
);

