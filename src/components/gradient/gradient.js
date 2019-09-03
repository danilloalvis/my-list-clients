import React, {ReactElement} from 'react';
import {ViewPropTypes} from 'react-native';
import {GradiendView} from './gradient.styled';
import PropTypes from 'prop-types';
import {withTheme} from 'styled-components';
const Gradient = ({colors, style, children, theme}) => {
  if (!colors) {
    colors = [theme.colors.primary, theme.colors.secondary];
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

export default withTheme(Gradient);
