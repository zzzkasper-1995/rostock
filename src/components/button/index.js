import React from 'react';
import {Text} from 'react-native'

import PrimaryButton from './primary'
import SecondaryButton from './secondary'
import ThirdButton from './third'

export default ({type, setting, children, action}) => {
    switch (type) {
        case 'primary':
          return (
            <PrimaryButton setting={setting} action={action}>
                {children}
            </PrimaryButton>)
        case 'secondary':
            return (
            <SecondaryButton setting={setting} action={action}>
                {children}
            </SecondaryButton>)
        case 'third':
            return (
            <ThirdButton setting={setting} action={action}>
                {children}
            </ThirdButton>)
        default:
        return (
          <PrimaryButton setting={setting} action={action}>
              {children}
          </PrimaryButton>)
    }
}