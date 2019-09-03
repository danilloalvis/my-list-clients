import React from 'react';
import {
  Container,
  ContainerInfo,
  TextInfo,
  Bold,
  ContainerIcon,
  Icon,
} from './item-client.styled';
import Avatar from '../avatar/avatar';
const ItemClient = ({name, dob, cpf, index}) => {
  return (
    <Container index={index}>
      <Avatar name={name} />
      <ContainerInfo>
        <TextInfo>
          <Bold>{name}</Bold>
        </TextInfo>
        <TextInfo>{dob}</TextInfo>
        <TextInfo>{cpf}</TextInfo>
      </ContainerInfo>
      <ContainerIcon>
        <Icon name="delete" />
      </ContainerIcon>
    </Container>
  );
};

export default ItemClient;
