import React from 'react';
import {View} from 'react-native';
import {spacing} from '../../utils/utils';

const Container = ({children}) => {
  return <View style={{marginHorizontal: spacing}}>{children}</View>;
};

export default Container;
