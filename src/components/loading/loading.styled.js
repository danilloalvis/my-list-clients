import styled from 'styled-components/native'

const Container = styled.View`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25);
    align-content: center;
    justify-content: center;
    align-items: center;
`

const Indicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.colors.primary,
    size: 50
}))``

export { Container, Indicator }
