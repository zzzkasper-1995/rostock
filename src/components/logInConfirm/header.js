import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const LOGO = require('../../images/Logo_horiz.png');

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
        position: 'relative',
    },
    logo: {
        width: 232,
        height: 64,
        marginTop: 50,
    },
    title: {
        position: 'absolute',
        bottom: 0, 
        right: -1,
        textAlign: 'center',
        fontSize: 8.5,
        marginTop: 8,
        color: '#ebebff',
        fontFamily: 'Open Sans',
        fontWeight: '300',
    },
});
