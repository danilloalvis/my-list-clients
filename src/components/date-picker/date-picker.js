import React from 'react';
import {ViewPropTypes} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Container,
  Label,
  InputDate,
  IconContainer,
  Icon,
  ErrorMessage,
} from './date-picker.styled';

const DatePicker = ({
  labelStyle,
  labelText,
  style,
  format,
  minDate,
  maxDate,
  confirmBtnText,
  cancelBtnText,
  errorMessage,
  errorMessageStyle,
  value,
  placeholder,
  hidden,
  iconName,
  disabled,
  onDateChange,
}) => {
  if (hidden === true) {
    return null;
  }
  if (!minDate) {
    minDate = '01/01/1900';
  }
  if (!maxDate) {
    maxDate = moment(new Date())
      .subtract(18, 'years')
      .format('DD/MM/YYYY');
  }

  return (
    <Container>
      <Label style={labelStyle}>{labelText} </Label>
      <InputDate
        disabled={disabled}
        date={value}
        style={style}
        mode="date"
        androidMode="spinner"
        placeholder={placeholder || 'Selecione uma data'}
        format={format || 'DD/MM/YYYY'}
        minDate={minDate || minDate}
        maxDate={maxDate || maxDate}
        confirmBtnText={confirmBtnText || 'Confirmar'}
        cancelBtnText={cancelBtnText || 'Cancelar'}
        showIcon={false}
        onDateChange={onDateChange}
        locale="pt"
      />

      <IconContainer>
        <Icon name="caret-down" />
      </IconContainer>
      {errorMessage ? (
        <ErrorMessage style={errorMessageStyle}>
          <Icon name="exclamation-circle" /> {errorMessage}
        </ErrorMessage>
      ) : null}
    </Container>
  );
};

DatePicker.propTypes = {
  labelStyle: PropTypes.object,
  iconName: PropTypes.string,
  labelText: PropTypes.string,
  style: ViewPropTypes.style,
  format: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  confirmBtnText: PropTypes.string,
  cancelBtnText: PropTypes.string,
  errorMessage: PropTypes.string,
  errorMessageStyle: PropTypes.object,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  onDateChange: PropTypes.func.isRequired,
};

export default DatePicker;
