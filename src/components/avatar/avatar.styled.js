import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, {css} from 'styled-components/native';

const Container = styled.View`
  align-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  overflow: hidden;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.greyDark};
  ${({border, color}) => {
    if (border) {
      return css`
        border-color: ${({theme}) => (color ? color : theme.colors.primary)};
        border-radius: 50px;
        border-width: 2px;
      `;
    } else {
      return ``;
    }
  }}

  ${({shadow}) =>
    shadow
      ? css`
                shadow-color: #000;
                shadow-offset: {width: 2, height: 2};
                shadow-opacity: 0.8;
                shadow-radius: 2;
                elevation: 2;
             `
      : ''}
`;

const Label = styled.Text`
  font-weight: bold;
`;

export {Container, Label};
