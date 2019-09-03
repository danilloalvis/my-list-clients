import React from 'react';
import {Container, Label} from './avatar.styled';
import PropTypes from 'prop-types';

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
];

const Avatar = ({
  stylesContainer,
  size,
  style,
  border,
  shadow,
  name,
  color,
}) => {
  let _style;

  const _imageSize = {
    width: size || 50,
    height: size || 50,
    borderRadius: (size || 50) / 2,
  };

  if (Array.isArray(style)) {
    _style = [_imageSize, ...style];
  } else {
    if (style) {
      _style = {
        ..._imageSize,
        ...style,
      };
    } else {
      _style = _imageSize;
    }
  }

  const _formatName = name => {
    if (!name) {
      return '';
    }

    let arrayName = name.split(' ');

    let nameFormated = '';

    if (arrayName.length == 1) {
      nameFormated = arrayName[0].charAt(0);
    }

    if (arrayName.length > 1) {
      nameFormated = arrayName[0].charAt(0) + arrayName[1].charAt(0);
    }
    return nameFormated.toLocaleUpperCase();
  };
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <Container
      shadow={shadow}
      border={border}
      color={color}
      style={[stylesContainer, _style, {backgroundColor: bgColor}]}>
      <Label style={{fontSize: (size || 50) / 2}}>{_formatName(name)}</Label>
    </Container>
  );
};

Avatar.propTypes = {
  stylesContainer: PropTypes.object,
  size: PropTypes.number,
  style: PropTypes.object,
  border: PropTypes.bool,
  shadow: PropTypes.bool,
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Avatar;
