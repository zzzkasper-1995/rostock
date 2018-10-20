import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default ({height=80, children}) => (
    <View style={{position: 'relative', alignItems: 'center', justifyContent: 'center', height, marginTop: 8}}>
        <Svg width={width} height={height} style={{position: 'absolute', top: 0, left: 0}}>         
            <Defs>
                <RadialGradient id="gradTop"
                    cx={width*0.5} cy={0}
                    rx={width*0.75} ry={height*0.3}
                    fx={width*0.5} fy={0}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop
                        offset="0"
                        stopColor="white"
                        stopOpacity="0.4"
                    />
                    <Stop
                        offset="1"
                        stopColor="#1F394A"
                        stopOpacity="0"
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
        </Svg>
        {children}
    </View>
);
