import React, {PureComponent} from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Keyboard, Animated, Easing } from 'react-native';

import Background from './background';
import Header from './header';
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
    width: 232,
    height: 44,
    shadowColor: COLOR.LITE_GREEN,
    borderColor: [ COLOR.BLUE_DARK_LITE, COLOR.BLACK],
    border: 1,
    radius: 15,
    shadowTopRadius: 1,
    backgroundColor: {start: COLOR.BLUE_DARK_LITE, end: COLOR.BLUE_DARK}, // если больше одного то будет градиентом, если параметр опущен то фон прозрачный
    style: {
        marginTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const thirdOpt = { ...BUTTON_OPT_MAIN};

export default class LogInConfirm extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            keyFocus: false,
            willKeyboard: undefined,
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
        const isFocus = this.state.isKeyboard;
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

    animate(speed=150) {
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
        const {keyFocus, willKeyboard} = this.state;
        const { navigate } = this.props.navigation

        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.2, 1],
            outputRange: willKeyboard ?
                [0, 0, -165] : [-165, -165, 0],
        });

        console.log()


        return (
            <View style={styles.container}>
                <Background />
                <Animated.View style={[styles.container, { marginTop: movingMargin }]}>
                    <Header title="Платформа рекламного распространения"/>

                    <Text style={styles.contentPrimaryText}>
                        Введите код из смс для подтверждения входа в систему
                    </Text>

                    <TextInput
                        style={this.textInputStyleCalculator(keyFocus)}
                        underlineColorAndroid="transparent"
                        keyboardType='numeric'
                        onChangeText={(text) => text.length === 4 && Keyboard.dismiss()}
                        onFocus={() => this.setState({keyFocus: true})}
                        onBlur={() => this.setState({keyFocus: false})}
                    />

                    <Text style={styles.contentSecondaryText}>
                        Сообщение с кодом должно быть отправлено на номер телефона, который вы указывали при регистрации пользователя
                    </Text>
                    <Button
                        type="third"
                        setting={thirdOpt}
                        action={() => {}}
                    >
                        <Text style={styles.thirdTextButton}>
                            Выслать еще раз
                        </Text>
                    </Button>
                </Animated.View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    contentPrimaryText: {
        paddingTop: 40,
        marginVertical: 20,
        width: 224,
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        fontFamily: 'Open Sans',
        fontWeight: '300',
    },
    contentSecondaryText: {
        paddingTop: 60,
        width: 224,
        textAlign: 'center',
        lineHeight: 20,
        fontSize: 13,
        color: 'white',
        fontFamily: 'Open Sans',
        fontWeight: '200',
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
    },
    thirdTextButton: {      
        color: 'white',
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 4,
    },
});
