import React from 'react'
import { Container, ScrollContainer, Items } from './drawer-container.styled'
import Gradient from '../gradient/gradient'
const DraweContainer = props => {
    return (
        <ScrollContainer>
            <Container forceInset={{ top: 'always', horizontal: 'never' }}>
                <Gradient angle={45} style={{ width: '100%', height: '100%' }}>
                    <Items {...props} />
                </Gradient>
            </Container>
        </ScrollContainer>
    )
}

export default DraweContainer
