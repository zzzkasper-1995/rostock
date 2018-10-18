import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, { Defs, Rect, LinearGradient, RadialGradient, Path, Stop,} from 'react-native-svg';

export default class ThirdButton extends React.PureComponent {
    render = () => {
        //get the shadow settings and give them default values
        const {
            setting: {
                width=0,
                height=0,
                shadowColor='#000',
                borderColor=['#000'],
                border=0,
                radius=0,
                backgroundColor={
                    start: 'black',
                    end: 'black',
                },
                style={}
            },
            children,
            action,
        } = this.props;

        //define the lengths
        const outerWidth = border + radius;
        
        return (
            <TouchableOpacity
                style={[style, {
                    position: 'relative',
                    height: height+borderColor.length*border,
                    width: width+2*border,
                }]}
                onPress={action}
            >
                <Svg
                    height={height+3*border}
                    width={width+2*border}
                    style={{
                        position: 'absolute',
                        top:0,
                        left:0,
                    }}
                >
                    <Defs>
                        <LinearGradient
                            id="grad"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={3/4*height}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop
                                offset="0"
                                stopColor={backgroundColor.start}
                                stopOpacity="1"
                            />
                            <Stop
                                offset="1"
                                stopColor={backgroundColor.end}
                                stopOpacity="1"
                            />
                        </LinearGradient>
                    </Defs>
                    {paintBorder(borderColor, border, radius, width, height, "url(#grad)")}     
                </Svg>
                {children}
            </TouchableOpacity>
        );
    }
}

/**тройная рамка*/
const paintBorder = (borderColor, border, radius, width, height, backgroundColor) => {
    return borderColor.map((color, index) => (
        <Rect
            x={(index+1)*border}
            y={(index+1)*border}
            width={width-index*2*border}
            height={height-index*2*border}
            rx={radius-index*border}
            fill={backgroundColor}
            stroke={color}
            strokeWidth={border}
            key={index+color}
        />
    ))
}