import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Button from '../button';

const LOGO = require('../../images/Logo_horiz.png');

const COLOR = {
    GREEN: '#7bae45',
    LITE_GREEN: '#d1fa8a',
    BLUE: "#5088c0",
    BLACK: '#000',
    GRAY: '#ddd'
};

const BUTTON_OPT_MAIN = {
    width: 52,
    height: 52,
    shadowColor: COLOR.LITE_GREEN,
    borderColor: [COLOR.GREEN, COLOR.BLACK, COLOR.BLUE],
    border: 1,
    radius: 15,
    shadowTopRadius: 1,
    backgroundColor: {start: COLOR.LITE_GREEN, end: COLOR.GREEN}, // если больше одного то будет градиентом, если параметр опущен то фон прозрачный
    style: {
        marginTop: 16,
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const secondaryOpt = {...BUTTON_OPT_MAIN};

export default ({title, name='Unnamed'}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={LOGO}
                    resizeMode="contain"
                />
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <Button type="secondary" setting={secondaryOpt}/>
        </View>
        <Text style={styles.hello}>
            {`Добрый день, ${name}`}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    logoContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
    },
    logo: {
        width: 232,
        height: 64,
        marginTop: 40,

    },
    title: {
        position: 'absolute',
        bottom: 4, 
        right: -1,
        textAlign: 'center',
        fontSize: 8.5,
        marginTop: 8,
        color: '#ebebff',
        fontFamily: 'Open Sans',
        fontWeight: '300',
    },
    hello: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 24,
        color: '#fff',
        fontFamily: 'Open Sans',
        fontWeight: '300',
    },
});
