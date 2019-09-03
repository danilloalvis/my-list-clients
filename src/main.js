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
const Main = () => {
  const [text, setText] = useState('');

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Input
        value={text}
        onChangeText={setText}
        iconLeft="account"
        iconRight="account"
        loading
      />
    </Fragment>
  );
};

export default Main;
