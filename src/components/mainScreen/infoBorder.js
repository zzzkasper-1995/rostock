import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default ({height=56}) => (
    <View style={[{position: 'relative', height}, styles.container]}>
        <Svg width={width} height={height} style={{position: 'absolute', top: 0, left: 0}}>         
            <Defs>
                <LinearGradient
                    id="grad"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={height}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop
                        offset="0"
                        stopColor="#3e4246"
                        stopOpacity="1"
                    />
                    <Stop
                        offset="1"
                        stopColor="#252a30"
                        stopOpacity="1"
                    />
                </LinearGradient>
            </Defs>
            <Rect
                x={0}
                y={0}
                width={width}
                height={height}
                strokeWidth="0"
                fill="url(#grad)"
            />
        </Svg>
        <Text style={styles.text}>
            У вас <Text style={{backgroundColor: 'green', borderRadius: 8}}>2</Text> новых сообщения по текущим заказам
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#343537',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    text: {
        paddingVertical: 8,
        width: 224,
        textAlign: 'center',
        lineHeight: 20,
        fontSize: 13,
        color: 'white',
        fontFamily: 'Open Sans',
        fontWeight: '200',
    },
});
