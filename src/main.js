/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StatusBar, View} from 'react-native';
import AppNavigation from './navigation';
import HomeScreen from './screens/home/home';
const Main = () => {
  return (
    <Fragment>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <AppNavigation />
      </View>
    </Fragment>
  );
};

export default Main;
