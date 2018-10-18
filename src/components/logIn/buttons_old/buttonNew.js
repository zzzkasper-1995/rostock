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
                borderColor='#000',
                border=0,
                radius=0,
                opacity=1,
                shadowTopRadius=0,
                backgroundColor,
                style={}
            },
            children,
            action,
        } = this.props;

        //define the lengths
        const lineWidth = border;
        const rectWidth = width-radius*2;
        const rectHeight = height-radius*2-lineWidth*2;
        const borderWidth = shadowTopRadius + 1;
        const outerWidth = lineWidth + radius;

        const param = [0, 1, 2, 3];
        
        return (
            <TouchableOpacity
                style={[style, {
                    position: 'relative',
                    height: height + borderWidth,
                    width: width + lineWidth*2+2,
                }]}
                onPress={action}
            >
                <Svg
                    height={height+borderWidth}
                    width={width+lineWidth*2}
                    style={{
                        position: 'absolute',
                        top:0,
                        left:0,
                    }}
                >
                    <Defs>
                        <G id="angle">
                            <Circle
                                cx={radius}
                                cy={radius}
                                r={radius} 
                                stroke="red"
                                fill="none"
                                strokeWidth={lineWidth}
                            />
                        </G>
                    </Defs>

                    {/*border angle*/}
                    <Path d={`M 0 ${outerWidth},Q 0 ${borderWidth} ${outerWidth} ${borderWidth},v ${lineWidth},q ${-radius} 0 ${-radius} ${radius},h ${-lineWidth},z`} fill={borderColor}/>
                    <Path d={`M ${rectWidth+lineWidth+radius} ${borderWidth},q ${outerWidth} 0 ${outerWidth} ${outerWidth},h ${-lineWidth},q 0 ${-radius} ${-radius} ${-radius},v ${-lineWidth},z`} fill={borderColor}/>
                    <Path d={`M ${rectWidth+lineWidth+2*radius} ${rectHeight+lineWidth+radius+borderWidth},h ${lineWidth},q 0 ${outerWidth} -${outerWidth} ${outerWidth},v ${-lineWidth},q ${radius} 0 ${radius} ${-radius},z`} fill={borderColor}/>
                    <Path d={`M 0 ${rectHeight+lineWidth+radius+borderWidth},q 0 ${outerWidth} ${outerWidth} ${outerWidth},v ${-lineWidth},q ${-radius} 0 ${-radius} ${-radius},h ${-lineWidth},z`} fill={borderColor}/>

                    {/*border vertical and horizontal*/}
                    <Rect x={outerWidth} y={`${borderWidth}`} width={rectWidth} height={lineWidth} fill={borderColor} />
                    <Rect x={rectWidth+lineWidth+2*radius} y={outerWidth+borderWidth} width={lineWidth} height={rectHeight} fill={borderColor} />
                    <Rect x={outerWidth} y={rectHeight+lineWidth+2*radius+borderWidth} width={rectWidth} height={lineWidth} fill={borderColor} />
                    <Rect x="0" y={outerWidth+borderWidth} width={lineWidth} height={rectHeight} fill={borderColor} />


                    {/*border angle*/}
                    <Rect
                        x="5"
                        y="5"
                        width="220"
                        height="40"
                        rx="5"
                        fill="yellowgreen"
                        stroke="green"
                        stroke-width="5"
                    />

                    <Use href="#angle" 
                        height={10}
                        width={10}
                        x="1" y="4"
                    />
                    <Path
                    d={`
                        M ${rectWidth+lineWidth+radius} ${borderWidth},
                        q ${outerWidth} 0 ${outerWidth} ${outerWidth},
                        h ${-lineWidth},
                        q 0 ${-radius} ${-radius} ${-radius},
                        v ${-lineWidth+2},
                        z
                    `}
                    fill={'red'}/>
                    <Path d={`M ${rectWidth+lineWidth+2*radius} ${rectHeight+lineWidth+radius+borderWidth},h ${lineWidth},q 0 ${outerWidth} -${outerWidth} ${outerWidth},v ${-lineWidth},q ${radius} 0 ${radius} ${-radius},z`} fill={'red'}/>
                    <Path d={`M 0 ${rectHeight+lineWidth+radius+borderWidth},q 0 ${outerWidth} ${outerWidth} ${outerWidth},v ${-lineWidth},q ${-radius} 0 ${-radius} ${-radius},h ${-lineWidth},z`} fill={'red'}/>

                    {/*border vertical and horizontal*/}
                    <Line
                        x1={outerWidth}
                        y1={borderWidth+2}
                        x2={outerWidth+width}
                        y2={borderWidth+2}
                        stroke="red"
                        strokeWidth={lineWidth}
                    />
                    <Rect x={rectWidth+lineWidth+2*radius-(param[2]-1)*lineWidth} y={outerWidth+borderWidth} width={lineWidth} height={rectHeight} fill={'red'} />
                    <Rect x={outerWidth} y={rectHeight+lineWidth+2*radius-(param[2]-2)*lineWidth} width={rectWidth} height={lineWidth} fill={'red'} />  
                    <Rect x={(param[2]-1)*lineWidth} y={outerWidth+borderWidth} width={lineWidth} height={rectHeight} fill={'red'} />
                </Svg>
                {children}
            </TouchableOpacity>
        );
    }
}