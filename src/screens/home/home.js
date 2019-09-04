/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react'
import { Parallax, Input, ItemClient } from '../../components'
import { FlatList } from 'react-native-gesture-handler'
import { Container, Search, SearchContainer } from './home.styled'
const _clients = [
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    },
    {
        name: 'Danilo Torquato',
        cpf: '99999999999',
        birthdate: '1994-04-01'
    },
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    },
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    },
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    },
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    },
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    },
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    },
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    },
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    },
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    },
    {
        name: 'Carl Jhonson',
        cpf: '12345678901',
        birthdate: '1970-01-01'
    }
]
const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [totalClients, setTotalClients] = useState(_clients)
    const [clients, setClients] = useState([])
    const _header = () => {
        return (
            <SearchContainer style={{ height: 130 }}>
                <Search value={search} onChangeText={setSearch} />
            </SearchContainer>
        )
    }

    useEffect(() => {
        setClients(totalClients)
    }, [totalClients])

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
    )
}

export default HomeScreen
