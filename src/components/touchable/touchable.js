import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';
import {Container} from './touchable.styled';

import PropTypes from 'prop-types';

const Touchable = ({style, onPress, disabled, children}) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        disabled={disabled}
        style={style}
        onPress={onPress}>
        <Container style={style}>{children}</Container>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity
        disabled={disabled}
        style={style}
        activeOpacity={0.7}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

Touchable.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Touchable;
