/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StatusBar, View} from 'react-native';
import {
  Touchable,
  Gradient,
  Input,
  Avatar,
  DatePicker,
  Button,
} from './components';
import {SafeAreaView} from 'react-navigation';
const Main = () => {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <View style={{flex: 1, padding: 20}}>
          <Button title="Teste" />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default Main;
