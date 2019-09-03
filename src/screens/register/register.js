import React from 'react';
import {Container, ContainerButton} from './register.styled';
import {Input, DatePicker, Button} from '../../components';
const RegisterScreen = () => {
  return (
    <Container>
      <Input labelText="Nome" />
      <Input labelText="CPF" mask="(99) 9999-9999" />
      <DatePicker labelText="Data de Nascimento" />
      <ContainerButton>
        <Button title="Salvar" />
      </ContainerButton>
    </Container>
  );
};

export default RegisterScreen;
