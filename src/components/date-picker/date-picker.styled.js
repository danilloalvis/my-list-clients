import styled, {css} from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import DatePicker from 'react-native-datepicker';

const Container = styled.View`
  width: 100%;
  margin-top: 100px;
`;

const Label = styled.Text`
  color: ${({theme}) => theme.colors.labelColor};
  font-size: ${({theme}) => theme.textNormal};
  font-weight: 400;
  margin-bottom: 5;
`;

const InputContainer = styled.View`
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  flex: 1;
`;

const InputDate = styled(DatePicker).attrs(({theme}) => ({
  customStyles: {
    dateIcon: null,
    dateInput: {
      width: '100%',
      backgroundColor: theme.colors.inputBackground,
      height: theme.formHeight,
      borderRadius: theme.radius,
      paddingLeft: 18,
      borderWidth: theme.borderWidth,
      borderColor: theme.colors.borderColor,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    dateText: {fontSize: 16},
    placeholderText: {fontSize: 16},
  },
}))`
  width: 100%;
  justify-content: flex-start;
`;

const IconContainer = styled.TouchableOpacity`
  align-content: center;
  justify-content: center;
  position: absolute;
  width: 30px;
  height: ${({theme}) => theme.formHeight};
  right: 0;
  top: 50%;
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
