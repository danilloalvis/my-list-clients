import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
`
const ContainerForms = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 30,
        showsVerticalScrollIndicator: false
    }
})`
    flex: 1;
`
export { Container, ContainerForms }
