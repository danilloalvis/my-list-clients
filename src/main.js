/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState, useEffect} from 'react';
import {StatusBar, Text} from 'react-native';
import {Touchable, Gradient, Input, Avatar, DatePicker} from './components';
import {SafeAreaView} from 'react-navigation';
import {ClientAPI} from './api';
const Main = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    _init();
  }, []);

  const _init = async () => {
    console.log('====================================');
    const result = await ClientAPI.list();
    console.log('result', result);
    console.log('====================================');
  };
  return (
    <Fragment>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Input
          labelText="Pesquisar"
          value={text}
          onChangeText={setText}
          iconLeft="account"
          iconRight="filter"
          loading
        />
        <DatePicker
          value={date}
          onDateChange={val => setDate(val)}
          labelText="Data"
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default Main;
