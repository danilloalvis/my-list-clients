import React from 'react'
import { View, ViewPropTypes } from 'react-native'

import {
    ErrorMessage,
    Icon,
    IconContainerLeft,
    IconContainerRight,
    InputContainer,
    InputForm,
    Label,
    Container,
    MaskForm,
    Loading
} from './input.styled'
import PropTypes from 'prop-types'

const Input = ({
    inputStyle,
    labelStyle,
    iconStyle,
    style,
    errorMessageStyle,
    labelText,
    mask,
    errorMessage,
    inputProps,
    value,
    placeholder,
    hidden,
    disabled,
    iconLeft,
    iconRight,
    iconLeftPress,
    iconRightress,
    onChangeText,
    loading
}) => {
    if (hidden === true) {
        return null
    }

    return (
        <Container style={style}>
            {labelText && <Label style={labelStyle}>{labelText} </Label>}
            <InputContainer>
                {mask ? (
                    <MaskForm
                        autoCapitalize='none'
                        type={'custom'}
                        iconLeft={iconLeft}
                        iconRight={iconRight}
                        loading={loading}
                        options={{
                            mask
                        }}
                        style={inputStyle}
                        {...inputProps}
                        placeholder={placeholder}
                        editable={!disabled}
                        value={value}
                        onChangeText={onChangeText}
                    />
                ) : (
                    <InputForm
                        autoCapitalize='none'
                        iconLeft={iconLeft}
                        iconRight={iconRight}
                        loading={loading}
                        style={inputStyle}
                        placeholder={placeholder}
                        {...inputProps}
                        value={value}
                        editable={!disabled}
                        onChangeText={onChangeText}
                    />
                )}
                {iconLeft && (
                    <IconContainerLeft iconLeft={iconLeft} onPress={iconLeftPress}>
                        <Icon name={iconLeft} style={iconStyle} />
                    </IconContainerLeft>
                )}
                {iconRight && (
                    <IconContainerRight iconLeft={iconRight} onPress={iconRightress}>
                        <Icon name={iconRight} style={iconStyle} />
                        {loading && <Loading />}
                    </IconContainerRight>
                )}
            </InputContainer>
            {errorMessage && <ErrorMessage style={errorMessageStyle}>{errorMessage}</ErrorMessage>}
        </Container>
    )
}
Input.propTypes = {
    inputStyle: ViewPropTypes.style,
    labelStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    style: ViewPropTypes.style,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    errorMessageStyle: PropTypes.object,
    labelText: PropTypes.string,
    mask: PropTypes.string,
    errorMessage: PropTypes.string,
    inputProps: PropTypes.object,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    hidden: PropTypes.bool,
    disabled: PropTypes.bool,
    iconLeftPress: PropTypes.func,
    iconRightPress: PropTypes.func,
    onChangeText: PropTypes.func.isRequired,
    loading: PropTypes.bool
}
export default Input
