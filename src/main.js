/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {StatusBar, Text} from 'react-native';
import {Touchable, Gradient, Input, Avatar} from './components';
import {SafeAreaView} from 'react-navigation';
const Main = () => {
  const [text, setText] = useState('');

  return (
    <Fragment>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Input
          value={text}
          onChangeText={setText}
          iconLeft="account"
          iconRight="filter"
          loading
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default Main;
