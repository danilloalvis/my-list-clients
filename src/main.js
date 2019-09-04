/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react'
import { StatusBar, View } from 'react-native'
import AppNavigation from './navigation'
import { withTheme } from 'styled-components'

const Main = ({ theme }) => {
    return (
        <Fragment>
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={theme.colors.primary} barStyle='light-content' />
                <AppNavigation />
            </View>
        </Fragment>
    )
}

export default withTheme(Main)
