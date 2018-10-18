import React from 'react';
import {Text} from 'react-native'

import PrimaryButton from './primary'
import SecondaryButton from './secondary'

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
        default:
        return (
          <PrimaryButton setting={setting} action={action}>
              {children}
          </PrimaryButton>)
    }
}