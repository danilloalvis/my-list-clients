/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {StatusBar, Text} from 'react-native';
import {Touchable, Gradient, Input, Avatar, DatePicker} from './components';
import {SafeAreaView} from 'react-navigation';
const Main = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

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
