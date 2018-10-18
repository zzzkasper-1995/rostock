import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default () => (
    <View style={StyleSheet.absoluteFill}>
        <Svg width={width} height={height} style={{position: 'absolute', top: 0, left: 0}}>         
            <Defs>
                <RadialGradient id="gradTop"
                    cx={width*0.5} cy={0}
                    rx={width*0.75} ry={height*0.6}
                    fx={width*0.5} fy={0}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop
                        offset="0"
                        stopColor="rgb(48,135,197)"
                        stopOpacity="1"
                    />
                    <Stop
                        offset="1"
                        stopColor="#1F394A"
                        stopOpacity="1"
                    />
                </RadialGradient>
                <RadialGradient id="gradBottom"
                    cx={width*0.5} cy={0.9*height}
                    rx={width*0.75} ry={height*0.3}
                    fx={width} fy={0}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop
                        offset="0"
                        stopColor="#2E86C6"
                        stopOpacity="1"
                    />
                    <Stop
                        offset="1"
                        stopColor="#1F394A"
                        stopOpacity="1"
                    />
                </RadialGradient>
            </Defs>
            <Rect
                x={0}
                y={0}
                width={width}
                height={height}
                strokeWidth="0"
                fill="url(#gradTop)"
            /> 
            <Rect
                x={0}
                y={height*0.6}
                width={width}
                height={height*0.4}
                strokeWidth="0"
                fill="url(#gradBottom)"
            /> 
        </Svg>
    </View>
);
