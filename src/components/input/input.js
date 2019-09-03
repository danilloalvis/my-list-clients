import React from 'react';
import {View, ViewPropTypes} from 'react-native';

import {
  ErrorMessage,
  Icon,
  IconContainer,
  InputContainer,
  InputForm,
  Label,
  MaskForm,
  Loading,
} from './input.styled';
import PropTypes from 'prop-types';

const Input = ({
  inputStyle,
  labelStyle,
  iconStyle,
  style,
  errorMessageStyle,
  labelText,
  mask,
  iconName,
  errorMessage,
  inputProps,
  value,
  placeholder,
  hidden,
  disabled,
  iconLeft,
  iconRight,
  iconPress,
  onChangeText,
  loading,
}) => {
  if (hidden === true) {
    return null;
  }

  return (
    <View style={style}>
      {errorMessage && (
        <ErrorMessage style={errorMessageStyle}>{errorMessage}</ErrorMessage>
      )}
      <InputContainer>
        {labelText && <Label style={labelStyle}>{labelText} </Label>}
        {mask ? (
          <MaskForm
            autoCapitalize="none"
            type={'custom'}
            iconLeft={iconLeft}
            iconRight={iconRight || loading}
            options={{
              mask,
            }}
            style={inputStyle}
            {...inputProps}
            placeholder={placeholder}
            editable={!disabled}
            value={value}
            selectionColor="#3f51b5"
            onChangeText={onChangeText}
          />
        ) : (
          <InputForm
            autoCapitalize="none"
            iconLeft={iconLeft}
            iconRight={iconRight || loading}
            style={inputStyle}
            placeholder={placeholder}
            {...inputProps}
            value={value}
            editable={!disabled}
            selectionColor="#3f51b5"
            onChangeText={onChangeText}
          />
        )}
        <IconContainer iconLeft={iconLeft} onPress={iconPress}>
          {iconName && <Icon name={iconName} style={iconStyle} />}
          {loading && <Loading />}
        </IconContainer>
      </InputContainer>
    </View>
  );
};
Input.propTypes = {
  inputStyle: ViewPropTypes.style,
  labelStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  style: ViewPropTypes.style,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  errorMessageStyle: PropTypes.object,
  labelText: PropTypes.string,
  mask: PropTypes.string,
  iconName: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  iconPress: PropTypes.func,
  onChangeText: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
export default Input;
