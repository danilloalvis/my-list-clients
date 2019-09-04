import styled from 'styled-components/native'
import { Animated } from 'react-native'
import Touchable from '../touchable/touchable'
import Feather from 'react-native-vector-icons/Feather'

const Container = styled.View`
    flex: 1;
`

const ScrollViewContainer = styled(Animated.ScrollView)`
    flex: 1;
`

const Header = styled(Animated.View)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
`
const HeaderLarge = styled(Animated.View)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`

const FloatButton = styled(Animated.View)`
    border-radius: 25;
    position: absolute;
    width: 50;
    height: 50;
    right: 40;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.primary};
`
const ContainerIcon = styled(Touchable)`
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
    align-items: center;
`

const Icon = styled(Feather)`
    font-size: 30;
    color: #fff;
`

export { Container, ScrollViewContainer, Header, HeaderLarge, FloatButton, ContainerIcon, Icon }
