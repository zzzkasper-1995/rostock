import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, { Defs, Mask, Rect, LinearGradient, RadialGradient, Path, Ellipse, Stop,Text, Use, Circle, G, Line } from 'react-native-svg';

export default class NewTest extends React.Component {
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

                    {/**линия тени*/}
                    <Path
                        d={`M ${border} ${outerWidth},
                            Q ${border} ${2*border} ${outerWidth} ${border-1},
                            v ${border},
                            q ${-radius+2*border} ${border} ${-radius} ${radius},
                            h ${0},z
                        `}
                        fill={shadowColor}
                    />
                    <Path
                        d={`M ${outerWidth} ${border-1},
                            h ${width-2*outerWidth},
                            v ${border},
                            h ${-width+2*outerWidth},
                            v ${-border},z
                        `}
                        fill={shadowColor}
                    /> 
                    <Path
                        d={`
                            M ${width-outerWidth} ${border-1},
                            q ${outerWidth+border} ${0} ${outerWidth+border} ${outerWidth},
                            q ${-border} ${-outerWidth+border} ${-outerWidth-border} ${-outerWidth+border},
                            v ${-border},z`
                        }
                        fill={shadowColor}
                    />
                    
                    {paintBorder(borderColor, border, radius, width, height)}

                    
                </Svg>
                {children}
            </TouchableOpacity>
        );
    }
}

/**тройная рамка*/
const paintBorder = (borderColor, border, radius, width, height) => {
    return borderColor.map((color, index) => (
        <Rect
            x={(index+1)*border}
            y={(index+2)*border}
            width={width-index*2*border}
            height={height-index*2*border}
            rx={radius-index*border}
            fill="none"
            stroke={color}
            strokeWidth={border}
            key={index+color}
        />
    ))
}