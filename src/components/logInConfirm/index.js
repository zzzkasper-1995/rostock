import React, {PureComponent} from 'react';
import { View } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import Svg, {
    Use,
    Image,
  } from 'react-native-svg';
  
  export default () => (
    <View style={{backgroundColor: 'red', width: 100, height: 100, position: 'relative'}}>
        <SvgUri
            width="200"
            height="200"
            source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
        />
    </View>
  )