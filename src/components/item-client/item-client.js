import React, { PureComponent } from 'react'
import { Container, ContainerInfo, TextInfo, Bold, ContainerIcon, Icon } from './item-client.styled'
import Avatar from '../avatar/avatar'
import CPF from 'cpf'
import moment from 'moment'
import { withNavigation } from 'react-navigation'
import { ClientAPI } from '../../api'
import { Alert } from 'react-native'

class ItemClient extends PureComponent {
    render() {
        const { client, index } = this.props
        return (
            <Container index={index} onPress={this._goToEdit}>
                <Avatar name={client.name} />
                <ContainerInfo>
                    <TextInfo>
                        <Bold>{client.name}</Bold>
                    </TextInfo>
                    <TextInfo>{moment(client.dob).format('DD/MM/YYYY')}</TextInfo>
                    <TextInfo>{CPF.format(client.cpf)}</TextInfo>
                </ContainerInfo>
                <ContainerIcon onPress={this._delete}>
                    <Icon name='delete' />
                </ContainerIcon>
            </Container>
        )
    }

    _goToEdit = () => {
        const { client, navigation } = this.props
        navigation.navigate('UpdateScreen', { client: client })
    }

    _delete = () => {
        const { client } = this.props
        Alert.alert('Remover', `Deseja remover ${client.name} da sua lista?`, [
            {
                text: 'Não',
                onPress: () => {},
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => this.remove(client.id)
            }
        ])
    }

    remove = async id => {
        try {
            await ClientAPI.remove(id)
            const { onRemoved } = this.props
            if (onRemoved) {
                onRemoved()
            }
            Alert.alert('Cliente removido com sucesso')
        } catch (err) {
            Alert.alert(err)
        }
    }
}

export default withNavigation(ItemClient)
