import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerNavigation from './drawer-navigation'
import { withTheme } from 'styled-components'
import UpdateScreen from '../screens/register/register'
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigation = ({ initialRouteName, theme }) => {
    const { background, primary } = theme.colors

    const AppStack = createStackNavigator(
        {
            Drawer: DrawerNavigation,
            UpdateScreen: UpdateScreen
        },
        {
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: primary
                },
                headerTintColor: background
            }
        }
    )

    const stackNavigator = createAppContainer(
        createSwitchNavigator({
            App: { screen: AppStack }
        })
    )

    const App = createAppContainer(stackNavigator)
    return <App screenProps={{ theme: theme }} />
}

export default withTheme(AppNavigation)
