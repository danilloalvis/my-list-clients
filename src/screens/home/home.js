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

const HomeScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [totalClients, setTotalClients] = useState([])
    const [clients, setClients] = useState([])

    useEffect(async () => {
        setLoading(true)
        try {
            const result = await ClientAPI.list()
            setTotalClients(result)
            setClients(result)
            setLoading(false)
        } catch (err) {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (search) {
            const clients = totalClients.filter(
                item => item.name.toLocaleUpperCase().includes(search) || item.cpf.includes(search)
            )
            setClients(clients)
        } else {
            setClients(totalClients)
        }
    }, [search])

    const _header = () => {
        return (
            <SearchContainer style={{ height: 130 }}>
                <Search value={search} onChangeText={setSearch} />
            </SearchContainer>
        )
    }

    const _renderItems = ({ item, index }) => {
        return (
            <ItemClient
                cpf={item.cpf}
                name={item.name}
                dob={item.birthdate}
                index={index}
                onPress={() => navigation.navigate('UpdateScreen', { client: item })}
            />
        )
    }
    return (
        <Container>
            <Parallax headerHeight={130} headerComponent={_header}>
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

export default HomeScreen
