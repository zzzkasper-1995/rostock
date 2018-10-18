import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, { Defs, Rect, RadialGradient, Path, Stop } from 'react-native-svg';

export default class PrimaryButton extends React.PureComponent {
    render = () => {
        //get the shadow settings and give them default values
        const {
            setting: {
                width=0,
                height=0,
                borderColor=['#000', '#000'],
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
                    height: height+border,
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
                        <RadialGradient
                            id="grad"
                            cx={width/2}
                            cy="0"
                            rx={width}
                            ry={3/4*height}
                            fx={width/2}
                            fy={height}
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
                        </RadialGradient>
                    </Defs>
                
                    <Rect
                        x={border}
                        y={border-0.5}
                        width={width}
                        height={height}
                        rx={radius}
                        fill="url(#grad)"
                    />

                    <Path
                        d={`M ${radius/2} ${border-1+border},
                            h ${width-radius},
                            v ${border},
                            h ${-width+outerWidth+border},
                            v ${-border},z
                        `}
                        fill={borderColor[0]}
                    /> 

                    {/**линия тени*/}
                    <Path
                        d={`M ${border} ${outerWidth},
                            q ${border} ${-outerWidth} ${outerWidth} ${-radius-1},
                            v ${border},
                            q ${-radius} ${border} ${-outerWidth} ${outerWidth},z
                        `}
                        fill={borderColor[1]}
                    />
                    <Path
                        d={`M ${outerWidth} ${border-1},
                            h ${width-2*outerWidth},
                            v ${border},
                            h ${-width+2*outerWidth},
                            v ${-border},z
                        `}
                        fill={borderColor[1]}
                    /> 
                    <Path
                        d={`
                            M ${width-outerWidth} ${border-1},
                            q ${outerWidth+border} ${border-1} ${outerWidth+border} ${outerWidth},
                            q ${-border} ${-radius} ${-outerWidth-border} ${-radius},
                            v ${-border},z`
                        }
                        fill={borderColor[1]}
                    />
                </Svg>
                {children}
            </TouchableOpacity>
        );
    }
}