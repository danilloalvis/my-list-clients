import styled, {css} from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import DatePicker from 'react-native-datepicker';

const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  margin-top: 20px;
`;

const Label = styled.Text`
  color: ${({theme}) => theme.colors.labelColor};
  font-weight: 600;
  margin-bottom: 5px;
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
  position: absolute;
  right: 18;
  top: 38;
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

export {Container, Label, InputDate, IconContainer, Icon, ErrorMessage};
