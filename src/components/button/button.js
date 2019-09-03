import React from 'react';
import {withTheme} from 'styled-components';
import {Container, Title} from './button.styled';
import {ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = ({
  containerStyle,
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
      containerStyle = {
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.secondary,
        ...containerStyle,
      };
      fontColor = theme.colors.secondary;
    }

    if (success) {
      containerStyle = {
        backgroundColor: theme.colors.success,
        borderColor: theme.colors.success,
        ...containerStyle,
      };
      fontColor = theme.colors.success;
    }

    if (danger) {
      containerStyle = {
        backgroundColor: theme.colors.danger,
        borderColor: theme.colors.danger,
        ...containerStyle,
      };
      fontColor = theme.colors.danger;
    }

    if (outline) {
      containerStyle = {
        backgroundColor: 'transparent',
        ...containerStyle,
      };

      titleStyle = {
        color: fontColor,
      };
    }
  }
  if (!outline) {
    containerStyle = {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      ...containerStyle,
    };
  }

  return (
    <Container onPress={onPress} disabled={disabled} style={containerStyle}>
      <Title style={titleStyle}>{title}</Title>
    </Container>
  );
};

const Button = withTheme(CustomButton);

Button.propTypes = {
  containerStyle: ViewPropTypes.style,
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
