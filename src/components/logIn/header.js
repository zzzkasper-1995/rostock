import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const LOGO = require('../../images/Logo.png');

export default ({title}) => (
    <View style={styles.container}>
        <Image
            style={styles.logo}
            source={LOGO}
            resizeMode="contain"
        />
        <Text style={styles.title}>
            {title}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 16,
    },
    logo: {
        height: 256,
        marginTop: 50,
    },
    title: {
        textAlign: 'center',
        fontSize: 10,
        marginTop: 8,
        color: '#ebebff',
        fontFamily: 'Open Sans',
        fontWeight: '300',
    },
});
