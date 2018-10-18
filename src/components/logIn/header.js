import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const LOGO = require('../../images/Logo.png');
const TITLE = 'Платформа рекламного распространения';

export default (props) => (
    <View style={styles.container}>
        <Image
            style={[styles.logo, props.mini && {marginTop: -200} ]}
            source={LOGO}
            resizeMode="contain"
        />
        <Text style={styles.title}>
            {TITLE}
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
        fontSize: 11,
        marginTop: 8,
        color: 'white',
        fontFamily: 'Open Sans',
        fontWeight: '300',
    },
});
