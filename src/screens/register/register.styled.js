import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.background};
`;
const ContainerButton = styled.View`
  position: absolute;
  bottom: 20;
  left: 20;
  right: 20;
`;
export {Container, ContainerButton};
