import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import DrawerNavigation from './drawer-navigation';
import {withTheme} from 'styled-components';

const AppNavigation = ({initialRouteName, theme}) => {
  const stackNavigator = createAppContainer(
    createSwitchNavigator({
      App: {screen: DrawerNavigation},
    }),
  );

  const App = createAppContainer(stackNavigator);
  return <App screenProps={{theme: theme}} />;
};

export default withTheme(AppNavigation);
