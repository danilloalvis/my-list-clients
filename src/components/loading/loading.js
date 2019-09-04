import React from 'react'
import { Container, Indicator } from './loading.styled'

const Loading = ({ show }) => {
    if (!show) {
        return null
    }
    return (
        <Container>
            <Indicator />
        </Container>
    )
}

export default Loading
