import styled, {css} from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import DatePicker from 'react-native-datepicker';

const Container = styled.View.attrs({
  pointerEvents: 'none',
})`
  width: 100%;
`;

const Label = styled.Text`
  color: ${({theme}) => theme.colors.labelColor};
  font-size: ${({theme}) => theme.textNormal};
  font-weight: 400;
  margin-bottom: 5;
  margin-top: 10;
`;

const InputContainer = styled.View.attrs({
  pointerEvents: 'none',
})`
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;

const InputDate = styled(DatePicker).attrs(({theme}) => ({
  customStyles: {
    dateIcon: null,
    dateInput: {
      width: '100%',
      paddingRight: 10,
      paddingLeft: 10,
      backgroundColor: theme.colors.inputBackground,
      borderColor: theme.colors.borderColor,
      borderRadius: theme.radius,
      borderWidth: theme.borderWidth,
      height: theme.formHeight,
      fontSize: theme.textNormal,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    dateText: {fontSize: 16},
    placeholderText: {fontSize: 16},
  },
}))`
  width: 100%;
  justify-content: center;
`;

const IconContainer = styled.TouchableOpacity`
  align-content: center;
  justify-content: center;
  position: absolute;
  width: 30px;
  height: ${({theme}) => theme.formHeight};
  right: 0;
  bottom: -5;
`;

const Icon = styled(FontAwesome)`
  color: #6d6d70;
  font-size: 15px;
`;

const ErrorMessage = styled.Text`
  color: ${({theme}) => theme.colors.danger};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  margin-top: 5px;
`;

export {
  Container,
  Label,
  InputDate,
  IconContainer,
  Icon,
  ErrorMessage,
  InputContainer,
};
