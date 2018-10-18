import React from 'react';
import Svg, { Defs, Mask, Rect, LinearGradient, RadialGradient, Ellipse, Stop,Text, Use, Circle } from 'react-native-svg';

export default () => (
    <Svg width="200" height="200">
        <Defs>
            <Mask
                id="hole"maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="200"
                height="200"
            >
                <Rect width="100%" height="100%" fill="white"/>
                <Circle r="100" cx="100" cy="200" fill="black"/>
            </Mask>
        </Defs>

        <Circle id="donut" r="100" cx="150" cy="100" mask="url(#hole)" fill="#d1fa8a"/>
   
    </Svg>
);