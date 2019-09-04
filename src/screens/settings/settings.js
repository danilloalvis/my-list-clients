import React from 'react'

import { changeTheme } from '../../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container } from './settings.styled'
import { Button } from 'react-native'
const SettingsScreen = ({ changeTheme, theme }) => {
    const onPress = theme => {
        changeTheme(theme)
    }

    return (
        <Container>
            <Button onPress={() => onPress('light')} title='Trocar Tema' />
        </Container>
    )
}

const mapStateToProps = store => ({
    theme: store.theme
})
const mapDispatchToProps = dispatch => bindActionCreators({ changeTheme }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsScreen)
