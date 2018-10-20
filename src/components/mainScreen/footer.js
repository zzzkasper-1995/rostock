import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Button from '../button';

const COLOR = {
    GREEN: '#7bae45',
    LITE_GREEN: '#d1fa8a',
    BLUE: "#5088c0",
    BLUE_DARK_LITE: "#2b3e51",
    BLUE_DARK: "#29333f",
    BLACK: '#000',
    GRAY: '#ddd'
};

const BUTTON_OPT_MAIN = {
    width: 32,
    height: 32,
    shadowColor: COLOR.LITE_GREEN,
    borderColor: [ COLOR.BLUE_DARK_LITE, COLOR.BLACK],
    border: 1,
    radius: 16,
    shadowTopRadius: 1,
    backgroundColor: {start: COLOR.BLUE_DARK_LITE, end: COLOR.BLUE_DARK}, // если больше одного то будет градиентом, если параметр опущен то фон прозрачный
    style: {
        marginright: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const thirdOpt = { ...BUTTON_OPT_MAIN};

const LOGO = require('../../images/Logo_horiz.png');

export default () => (
    <View style={styles.container}>
        <View style={styles.block}>
            <View style={styles.leftContainer}>     
                <Image
                    style={styles.logo}
                    source={LOGO}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>
                    Платформа рекламного распространения
                </Text>
            </View>
        </View>
        <View style={styles.block}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>
                    Присоединяйтесь:
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.social}>
                    <Button
                        type="third"
                        setting={thirdOpt}
                        action={() => {}}
                    />
                    <Button
                        type="third"
                        setting={thirdOpt}
                        action={() => {}}
                    />
                    <Button
                        type="third"
                        setting={thirdOpt}
                        action={() => {}}
                    />
                </View>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 80,
    },
    block: {
        flex: 1,
        flexDirection: 'row',
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 24,
    },
    social: {
        flexDirection: 'row',
    },
    logo: {
        width: 128,
        height: 40,
    },
    title: {
        textAlign: 'left',
        fontSize: 9.5,
        color: '#ebebff',
        fontFamily: 'Open Sans',
        fontWeight: '300',
    },
    text: {
        textAlign: 'left',
        fontSize: 7.5,
        color: '#ebebff',
        fontFamily: 'Open Sans',
        fontWeight: '300',
    },
});
