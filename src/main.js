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
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const Main = ({ theme }) => {
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor={theme.colors.primary} barStyle='light-content' />
                    <AppNavigation />
                </View>
            </ThemeProvider>
        </Fragment>
    )
}

const mapStateToProps = store => ({
    theme: store.theme
})

export default connect(
    mapStateToProps,
    null
)(Main)
