import React, { PureComponent } from 'react'
import { Container, ContainerInfo, TextInfo, Bold, ContainerIcon, Icon } from './item-client.styled'
import Avatar from '../avatar/avatar'
import CPF from 'cpf'
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
                    <TextInfo>{dob}</TextInfo>
                    <TextInfo>{CPF.format(cpf)}</TextInfo>
                </ContainerInfo>
                <ContainerIcon>
                    <Icon name='delete' />
                </ContainerIcon>
            </Container>
        )
    }
}
