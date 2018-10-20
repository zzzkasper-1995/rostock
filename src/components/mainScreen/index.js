import React, {PureComponent} from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard, Animated, Easing } from 'react-native';

import Background from './background';
import Header from './header';
import InfoBorder from './infoBorder';
import Button from '../button';
import Footer from './footer';
import FooterBorder from '../footerBorder';

const COLOR = {
    GREEN: '#7bae45',
    LITE_GREEN: '#d1fa8a',
    BLUE: "#5088c0",
    BLUE_DARK_LITE: "#2b3e51",
    BLUE_DARK_LITE_LITE: "#215563",
    BLUE_DARK: "#29333f",
    BLACK: '#000',
    GRAY: '#ddd'
};

const BUTTON_OPT_MAIN = {
    width: 232,
    height: 44,
    shadowColor: COLOR.LITE_GREEN,
    borderColor: [ COLOR.BLUE_DARK_LITE, COLOR.BLACK],
    border: 1,
    radius: 15,
    shadowTopRadius: 1,
    backgroundColor: {start: COLOR.BLUE_DARK_LITE_LITE, end: COLOR.BLUE_DARK}, // если больше одного то будет градиентом, если параметр опущен то фон прозрачный
    style: {
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const primaryOpt = {
    ...BUTTON_OPT_MAIN,
    borderColor: [COLOR.GREEN, COLOR.LITE_GREEN],
    backgroundColor: {start: COLOR.LITE_GREEN, end: COLOR.GREEN},
    style: {
        justifyContent: 'center',
        alignItems: 'center',
    }
};
const fourthdOpt = { ...BUTTON_OPT_MAIN};

export default class MainScreen extends PureComponent {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Background />
                <View style={[styles.container]}>
                    <Header title="Платформа рекламного распространения"/>
                    <InfoBorder />
                    <View style={styles.content}>       
                        <Button
                            type="fourth"
                            setting={fourthdOpt}
                            action={() => {}}
                        >
                            <Text style={styles.primaryTextButton}>
                                Проверка
                            </Text>
                        </Button>
                        <Button
                            type="fourth"
                            setting={fourthdOpt}
                            action={() => {}}
                        >
                            <Text style={styles.secondaryTextButton}>
                                Заказы
                            </Text>
                        </Button>
                        <Button
                            type="fourth"
                            setting={fourthdOpt}
                            action={() => {}}
                        >
                            <Text style={styles.secondaryTextButton}>
                                Промоутеры
                            </Text>
                        </Button>
                    </View>
                    <Footer />
                </View>
                <FooterBorder> 
                    <Button type="primary" setting={primaryOpt} action={() => navigate("LogInConfirm", {screen: "LogInConfirm"})}>
                        <Text style={styles.primaryTextButton}>
                            Заказать рекламу
                        </Text>
                    </Button>
                </FooterBorder>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textInput: {
        width: 224,
        color: 'white',
        fontFamily: 'Open Sans', 
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'center', 
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLOR.GRAY,
        paddingBottom: 4,
        marginVertical: 4,
    },
    primaryTextButton: {      
        color: 'white',
        fontFamily: 'Open Sans',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 4,
    },
    secondaryTextButton: {      
        color: 'white',
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 4,
    },
});
