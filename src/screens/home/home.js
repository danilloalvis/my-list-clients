/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View} from 'react-native';
import {Parallax, Input, ItemClient} from '../../components';
import {FlatList} from 'react-native-gesture-handler';
import {Container, Search, SearchContainer} from './home.styled';
const clients = [
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
  {
    name: 'Carl Jhonson',
    cpf: '12345678901',
    birthdate: '1970-01-01',
  },
];
const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const _header = () => {
    return (
      <SearchContainer style={{height: 130}}>
        <Search value={search} onChangeText={setSearch} />
      </SearchContainer>
    );
  };

  const _renderItems = ({item, index}) => {
    return (
      <ItemClient
        cpf={item.cpf}
        name={item.name}
        dob={item.birthdate}
        index={index}
      />
    );
  };
  return (
    <Parallax headerHeight={130} headerComponent={_header}>
      <Container>
        <FlatList
          data={clients}
          renderItem={_renderItems}
          scrollEnabled={false}
          keyExtractor={(item, index) => `client${index}`}
        />
      </Container>
    </Parallax>
  );
};

export default HomeScreen;
