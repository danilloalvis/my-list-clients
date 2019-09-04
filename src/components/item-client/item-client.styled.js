import styled from 'styled-components/native'
import Touchable from '../touchable/touchable'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Container = styled(Touchable)`
    padding: 8px;
    width: 100%;
    flex-direction: row;
    align-content: center;
    align-items: center;
    background-color: ${({ theme, index }) =>
        index % 2 == 0 ? theme.colors.backgroundAccent : theme.colors.background};
`

const ContainerInfo = styled.View`
    flex: 1;
    padding-left: 20px;
`

const TextInfo = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textColor};
`

const Bold = styled.Text`
    font-weight: bold;
`

const ContainerIcon = styled(Touchable)`
    align-self: center;
    padding: 5px;
`

const Icon = styled(MaterialCommunityIcons)`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.greyDark};
`

export { Container, ContainerInfo, TextInfo, Bold, ContainerIcon, Icon }
