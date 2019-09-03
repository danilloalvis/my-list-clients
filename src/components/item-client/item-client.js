import React, {PureComponent} from 'react';
import {
  Container,
  ContainerInfo,
  TextInfo,
  Bold,
  ContainerIcon,
  Icon,
} from './item-client.styled';
import Avatar from '../avatar/avatar';

export default class ItemClient extends PureComponent {
  render() {
    const {name, dob, cpf, index} = this.props;
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
  }
}
