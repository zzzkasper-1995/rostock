import React, {PureComponent} from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard, Animated, Easing } from 'react-native';

import Background from './background';
import Header from './header';
import Button from '../button';

const COLOR = {
    GREEN: '#7bae45',
    LITE_GREEN: '#d1fa8a',
    BLUE: "#5088c0",
    BLACK: '#000',
    GRAY: '#ddd'
};

const BUTTON_OPT_MAIN = {
    width: 232,
    height: 44,
    shadowColor: COLOR.LITE_GREEN,
    borderColor: [COLOR.GREEN, COLOR.BLACK, COLOR.BLUE],
    border: 1,
    radius: 15,
    shadowTopRadius: 1,
    backgroundColor: {start: COLOR.LITE_GREEN, end: COLOR.GREEN}, // если больше одного то будет градиентом, если параметр опущен то фон прозрачный
    style: {
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const primaryOpt = { ...BUTTON_OPT_MAIN, borderColor: [COLOR.GREEN, COLOR.LITE_GREEN]};
const secondaryOpt = {...BUTTON_OPT_MAIN};

export default class LogIn extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            loginFocus: false,
            pasFocus: false,
        };

        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow(this)
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide(this)
        );
        this.animate(0);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    componentWillUpdate(nextProps, nextState) {
        const isFocus = (this.state.loginFocus || this.state.pasFocus) && this.state.isKeyboard;
        const willFocus = nextState.isKeyboard;

        if ((isFocus ^ willFocus)) {
            this.setState({willKeyboard: nextState.isKeyboard});
            this.animate();
        }
    }

    _keyboardDidShow(thisState) {
        return () => thisState.setState({ isKeyboard: true });
    }

    _keyboardDidHide(thisState) {
        return () => thisState.setState({ isKeyboard: false });
    }

    animate(speed=200) {
        this.animatedValue.setValue(0);
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: speed,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }

    textInputStyleCalculator(elementFocus) {
        if (elementFocus) {
            return [styles.textInput, {borderColor: 'white'}];
        }
        return styles.textInput;
    }

    render() {
        const {pasFocus, loginFocus, willKeyboard} = this.state;

        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.2, 1],
            outputRange: willKeyboard ?
                [0, 0, -250] : [-250, -250, 0],
        });

        return (
            <View style={styles.container}>
                <Background />
                <Animated.View style={[styles.container, { marginTop: movingMargin }]}>
                    <Header />
                    <View style={styles.content}>
                        <TextInput
                            style={this.textInputStyleCalculator(loginFocus)}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={COLOR.GRAY}
                            placeholder="Логин"
                            onFocus={() => this.setState({loginFocus: true, pasFocus: false})}
                        />
                        <TextInput
                            style={this.textInputStyleCalculator(pasFocus)}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={COLOR.GRAY}
                            secureTextEntry={true}
                            placeholder="Пароль"
                            onFocus={() => this.setState({pasFocus: true, loginFocus: false})}
                        />
                        <Button type="primary" setting={primaryOpt} action={()=>{}}>
                            <Text style={styles.primaryTextButton}>
                                Войти
                            </Text>
                        </Button>
                        <Button type="secondary" setting={secondaryOpt} action={()=>{}}>
                            <Text style={styles.secondaryTextButton}>
                                Новый пользователь
                            </Text>
                        </Button>
                    </View>
                </Animated.View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
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
