import styled from 'styled-components/native'
import { Input, Gradient } from '../../components'
const Container = styled.View`
    flex: 1;
`

const Search = styled(Input).attrs({
    iconLeft: 'magnify',
    // iconRight: 'filter-variant',
    style: {
        borderWidth: 0
    }
})``

const SearchContainer = styled(Gradient)`
    width: 100%;
    align-content: center;
    justify-content: center;
    padding: 20px;
`

export { Container, Search, SearchContainer }
