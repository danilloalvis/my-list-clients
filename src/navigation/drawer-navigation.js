import React from 'react'
import { DrawerContainer, MenuButton } from '../components'
import Icon from 'react-native-vector-icons/Feather'
import HomeScreen from '../screens/home/home'
import RegisterScreen from '../screens/register/register'
import SettingsScreen from '../screens/settings/settings'
import { View } from 'react-native'

import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

const options = (props, label, icon) => ({
    drawerLabel: label,
    drawerIcon: ({ tintColor }) => (
        <View>
            <Icon name={icon} color={tintColor} size={24} />
        </View>
    )
})

const defaultOptions = (props, label) => {
    const { navigation, screenProps } = props
    const { background, primary } = screenProps.theme.colors

    return {
        transparentCard: true,
        headerStyle: {
            backgroundColor: primary,
            elevation: 0,
            shadowOpacity: 0
        },
        headerTitleStyle: {
            fontWeight: '#fff'
        },
        headerTintColor: background,
        headerTitle: label,
        headerLeft: <MenuButton color={background} openMenu={() => navigation.openDrawer()} />
    }
}

const DrawerNavigation = createDrawerNavigator(
    {
        Home: {
            screen: createStackNavigator(
                {
                    screen: HomeScreen
                },
                {
                    navigationOptions: props => options(props, 'Clientes', 'home'),
                    defaultNavigationOptions: props => defaultOptions(props, 'Clientes')
                }
            )
        },
        Register: {
            screen: createStackNavigator(
                {
                    screen: RegisterScreen
                },
                {
                    navigationOptions: props => options(props, 'Cadastro', 'user-plus'),
                    defaultNavigationOptions: props => defaultOptions(props, 'Cadastro')
                }
            )
        },
        Settings: {
            screen: createStackNavigator(
                {
                    screen: SettingsScreen
                },
                {
                    navigationOptions: props => options(props, 'Configurações', 'settings'),
                    defaultNavigationOptions: props => defaultOptions(props, 'Configurações')
                }
            )
        }
    },
    {
        initialRouteName: 'Home',
        drawerPosition: 'left',
        contentComponent: DrawerContainer,
        contentOptions: {
            labelStyle: { fontWeight: '400' },
            iconContainerStyle: { opacity: 1 }
        }
    }
)
DrawerNavigation.navigationOptions = {
    header: null
}
export default DrawerNavigation
