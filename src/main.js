/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {Parallax, Button, Input} from './components';
import {SafeAreaView} from 'react-navigation';
import ItemClient from './components/item-client/item-client';
import HomeScreen from './screens/home/home';
const Main = () => {
  const [search, setSearch] = useState('');
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
        <Input
          iconLeft="magnify"
          iconRight="filter-variant"
          value={search}
          onChangeText={setSearch}
        />
      </View>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />

        <HomeScreen />
      </SafeAreaView>
    </Fragment>
  );
};

export default Main;
