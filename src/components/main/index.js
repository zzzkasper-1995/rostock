import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Header from './header';
import Content from './content';
import Footer from './footer';

export default () => (
    <View style={styles.container}>
        <Header/>
        <Content />
        <Footer />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
