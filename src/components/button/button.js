import React from 'react';
import {withTheme} from 'styled-components';
import {Container, Title} from './button.styled';
import {ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = ({
  style,
  titleStyle,
  onPress,
  title,
  disabled,
  hidden,
  secondary,
  success,
  danger,
  outline,
  theme,
}) => {
  if (hidden) {
    return null;
  }

  if (theme) {
    let fontColor = theme.colors.primary;

    if (secondary) {
      style = {
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.secondary,
        ...style,
      };
      fontColor = theme.colors.secondary;
    }

    if (success) {
      style = {
        backgroundColor: theme.colors.success,
        borderColor: theme.colors.success,
        ...style,
      };
      fontColor = theme.colors.success;
    }

    if (danger) {
      style = {
        backgroundColor: theme.colors.danger,
        borderColor: theme.colors.danger,
        ...style,
      };
      fontColor = theme.colors.danger;
    }

    if (outline) {
      style = {
        backgroundColor: 'transparent',
        ...style,
      };

      titleStyle = {
        color: fontColor,
      };
    }
  }
  if (!outline) {
    style = {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      ...style,
    };
  }

  return (
    <Container onPress={onPress} disabled={disabled} style={style}>
      <Title style={titleStyle}>{title}</Title>
    </Container>
  );
};

const Button = withTheme(CustomButton);

Button.propTypes = {
  style: ViewPropTypes.style,
  titleStyle: PropTypes.object,
  onPress: PropTypes.func,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
};

export default Button;
