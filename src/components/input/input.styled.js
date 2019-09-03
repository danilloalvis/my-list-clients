import {TextInputMask} from 'react-native-masked-text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, {css} from 'styled-components/native';
import Touchable from '../touchable/touchable';

const Container = styled.View`
  width: 100%;
`;
const ErrorMessage = styled.Text`
  color: ${({theme}) => theme.colors.danger};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
  margin-left: 10px;
  text-transform: uppercase;
`;

const IconContainerLeft = styled(Touchable)`
  align-content: center;
  justify-content: center;
  position: absolute;
  width: 30px;
  height: ${({theme}) => theme.formHeight};
  left: 8px;
`;
const IconContainerRight = styled(Touchable)`
  align-content: center;
  justify-content: center;
  position: absolute;
  width: 30px;
  height: ${({theme}) => theme.formHeight};
  right: 8;
`;

const Icon = styled(MaterialCommunityIcons)`
  color: ${({theme}) => theme.colors.greyDark};
  font-size: 25px;
`;

const InputContainer = styled.View`
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  flex: 1;
`;

const InputForm = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.placeholderColor,
}))`
  ${({theme, iconLeft, iconRight, loading}) => {
    return css`
      padding-right: ${iconRight ? (loading ? '70px' : '40px') : '10px'};
      padding-left: ${iconLeft ? '40px' : '10px'};
      background-color: ${theme.colors.inputBackground};
      border-color: ${theme.colors.borderColor};
      border-radius: ${theme.radius};
      border-width: ${theme.borderWidth};
      height: ${theme.formHeight};
      font-size: ${theme.textNormal};
    `;
  }}
`;
const MaskForm = styled(TextInputMask).attrs(({theme}) => ({
  placeholderTextColor: theme.colors.placeholderColor,
}))`
  ${({theme, iconLeft, iconRight, loading}) => {
    return css`
      padding-right: ${iconRight ? (loading ? '70px' : '40px') : '10px'};
      padding-left: ${iconLeft ? '40px' : '10px'};
      background-color: ${theme.colors.inputBackground};
      border-color: ${theme.colors.borderColor};
      border-radius: ${theme.radius};
      border-width: ${theme.borderWidth};
      height: ${theme.formHeight};
      font-size: ${theme.textNormal};
      color: ${theme.colors.inputTextColor};
    `;
  }}
`;

const Label = styled.Text`
  color: ${({theme}) => theme.colors.labelColor};
  font-size: ${({theme}) => theme.textNormal};
  font-weight: 400;
  margin-bottom: 5;
  margin-top: 10;
`;

const Loading = styled.ActivityIndicator`
  color: ${({theme}) => theme.colors.primary};
  align-self: center;
  position: absolute;
  right: 40px;
`;

export {
  Container,
  ErrorMessage,
  IconContainerLeft,
  IconContainerRight,
  Icon,
  InputContainer,
  InputForm,
  Label,
  MaskForm,
  Loading,
};
