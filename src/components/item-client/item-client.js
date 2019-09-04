import React, { PureComponent } from 'react'
import { Container, ContainerInfo, TextInfo, Bold, ContainerIcon, Icon } from './item-client.styled'
import Avatar from '../avatar/avatar'
import CPF from 'cpf'
import moment from 'moment'
export default class ItemClient extends PureComponent {
    render() {
        const { name, dob, cpf, index, onPress } = this.props
        return (
            <Container index={index} onPress={onPress}>
                <Avatar name={name} />
                <ContainerInfo>
                    <TextInfo>
                        <Bold>{name}</Bold>
                    </TextInfo>
                    <TextInfo>{moment(dob).format('DD/MM/YYYY')}</TextInfo>
                    <TextInfo>{CPF.format(cpf)}</TextInfo>
                </ContainerInfo>
                <ContainerIcon>
                    <Icon name='delete' />
                </ContainerIcon>
            </Container>
        )
    }
}
