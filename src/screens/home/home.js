/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react'
import { Parallax, ItemClient, Loading } from '../../components'
import { FlatList } from 'react-native-gesture-handler'
import { Container, Search, SearchContainer } from './home.styled'
import { ClientAPI } from '../../api'
import { withNavigationFocus } from 'react-navigation'

const HomeScreen = ({ navigation, isFocused }) => {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [totalClients, setTotalClients] = useState([])
    const [clients, setClients] = useState([])

    useEffect(() => {
        if (isFocused) {
            _getClients()
        }
    }, [isFocused])

    useEffect(() => {
        _filterClienta()
    }, [totalClients, search])

    const _getClients = async () => {
        setLoading(true)
        try {
            const result = await ClientAPI.list()
            setTotalClients(result, () => {})
            setLoading(false)
        } catch (err) {
            setLoading(false)
        }
    }

    const _filterClienta = () => {
        if (search) {
            const clients = totalClients.filter(
                item =>
                    item.name.toLocaleUpperCase().includes(search.toLocaleUpperCase()) ||
                    item.cpf.includes(search)
            )
            setClients(clients)
        } else {
            setClients(totalClients)
        }
    }

    const _header = () => {
        return (
            <SearchContainer style={{ height: 130 }}>
                <Search value={search} onChangeText={setSearch} />
            </SearchContainer>
        )
    }

    const _renderItems = ({ item, index }) => {
        return <ItemClient client={item} index={index} onRemoved={_getClients} />
    }
    return (
        <Container>
            <Parallax pullToRefresh={_getClients} headerHeight={130} headerComponent={_header}>
                <Container>
                    <FlatList
                        data={clients}
                        renderItem={_renderItems}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => `client${index}`}
                    />
                </Container>
            </Parallax>
            <Loading show={loading} />
        </Container>
    )
}

export default withNavigationFocus(HomeScreen)
