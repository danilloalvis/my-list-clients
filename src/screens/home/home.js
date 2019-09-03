/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View} from 'react-native';
import {Parallax, Input, ItemClient, Gradient} from '../../components';
import {FlatList} from 'react-native-gesture-handler';

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
      <Gradient
        angle={45}
        style={{
          width: '100%',
          height: 130,
          alignContent: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
        <Input
          iconLeft="magnify"
          iconRight="filter-variant"
          value={search}
          onChangeText={setSearch}
        />
      </Gradient>
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
      <View key="body" style={{width: '100%'}}>
        <FlatList
          data={clients}
          renderItem={_renderItems}
          scrollEnabled={false}
          keyExtractor={(item, index) => `client${index}`}
        />
      </View>
    </Parallax>
  );
};

export default HomeScreen;
