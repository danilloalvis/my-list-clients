import Touchable from '../touchable/touchable';
import styled, {css} from 'styled-components';

const Container = styled(Touchable)`
  padding: 6px;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  ${({theme}) => {
    return css`
            background: ${theme.colors.primary};
            border-color: ${theme.colors.primary};
            border-radius: ${theme.radius}
            border-width: ${theme.borderWidth + 1};
            height: ${theme.formHeight};
        `;
  }};
`;

const Title = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-size: ${({theme}) => theme.textNormal};
  font-weight: 600;
  color: #ffffff;
`;

export {Container, Title};
