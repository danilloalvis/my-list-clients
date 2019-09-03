import React, {ReactElement} from 'react';
import {ViewPropTypes} from 'react-native';
import {GradiendView} from './gradient.styled';
import PropTypes from 'prop-types';

const Gradient = ({colors, style, children}) => {
  if (!colors) {
    colors = ['#3A607E', '#2D475C'];
  }

  return (
    <GradiendView colors={colors && colors} style={style}>
      {children}
    </GradiendView>
  );
};

Gradient.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  style: ViewPropTypes.style,
};

export default Gradient;
