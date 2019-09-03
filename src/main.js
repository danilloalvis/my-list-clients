/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState, useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {Touchable, Gradient, Input, Avatar, DatePicker} from './components';
import {SafeAreaView} from 'react-navigation';
import {ClientAPI} from './api';
const Main = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  return (
    <Fragment>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={{flex: 1, padding: 20}}>
          {/* <Input
            labelText="Pesquisar"
            value={text}
            onChangeText={setText}
            iconLeft="account"
            iconRight="filter"
            loading
          /> */}
          <DatePicker
            value={date}
            onDateChange={val => setDate(val)}
            labelText="Data"
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default Main;
