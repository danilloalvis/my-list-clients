/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StatusBar, View, Text} from 'react-native';
import {Parallax, Button} from './components';
import {SafeAreaView} from 'react-navigation';
const Main = () => {
  const _header = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 120,
          alignContent: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
        <Button title="Teste" />
      </View>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <Parallax headerHeight={120} headerComponent={_header}>
          <View key="body" style={{width: '100%', height: 1200}}>
            <View
              style={{
                width: 100,
                height: 100,
                margin: 20,
                backgroundColor: 'red',
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                margin: 20,
                backgroundColor: 'black',
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                margin: 20,
                backgroundColor: 'red',
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                margin: 20,
                backgroundColor: 'black',
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                margin: 20,
                backgroundColor: 'red',
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                margin: 20,
                backgroundColor: 'black',
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                margin: 20,
                backgroundColor: 'red',
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                margin: 20,
                backgroundColor: 'black',
              }}
            />
          </View>
        </Parallax>
      </SafeAreaView>
    </Fragment>
  );
};

export default Main;
