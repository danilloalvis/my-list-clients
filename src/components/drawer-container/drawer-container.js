import React from 'react';
import {Container, ScrollContainer, Items} from './drawer-container.styled';
const DraweContainer = props => {
  return (
    <ScrollContainer>
      <Container forceInset={{top: 'always', horizontal: 'never'}}>
        <Items {...props} />
      </Container>
    </ScrollContainer>
  );
};

export default DraweContainer;
