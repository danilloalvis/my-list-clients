import React, { useState, useEffect, useRef } from 'react'
import { Animated, Platform, StyleSheet, View, RefreshControl, Keyboard } from 'react-native'
import {
    Container,
    ScrollViewContainer,
    Header,
    HeaderLarge,
    FloatButton,
    ContainerIcon,
    Icon
} from './parallax.styled'
import { withTheme } from 'styled-components'

const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73

const Parallax = ({ headerHeight, children, headerComponent, theme, pullToRefresh }) => {
    const scrollViewEl = useRef(null)

    const [headerMaxHeight, setHeaderMaxHeight] = useState(300)
    const [headerScrollDistance, setHeaderScrollDistance] = useState(0)
    const [refreshing, setRefreshing] = useState(false)
    const [scrollY, setScrollY] = useState(new Animated.Value(0))
    const [animatedScrollY, setAnimatedScrollY] = useState(new Animated.Value(0))

    useEffect(() => {
        setHeaderScrollDistance(headerMaxHeight - HEADER_MIN_HEIGHT)
        setScrollY(
            new Animated.Value(
                // O iOS tem um valor de rolagem inicial negativo porque o conteúdo é inserido...
                Platform.OS === 'ios' ? -headerHeight : 0
            )
        )
        setHeaderMaxHeight(headerHeight || 300)
    }, [headerHeight])

    useEffect(() => {
        //Devido à inserção do conteúdo, o valor da rolagem será negativo no iOS, então, retorne a 0.
        setAnimatedScrollY(Animated.add(scrollY, Platform.OS === 'ios' ? headerMaxHeight : 0))
    }, [scrollY])

    const headerTranslate = animatedScrollY.interpolate({
        inputRange: [0, headerScrollDistance],
        outputRange: [0, -headerScrollDistance],
        extrapolate: 'clamp'
    })

    const headerContentTranslate = animatedScrollY.interpolate({
        inputRange: [0, headerScrollDistance],
        outputRange: [0, 100],
        extrapolate: 'clamp'
    })

    const headerScale = animatedScrollY.interpolate({
        inputRange: [0, headerScrollDistance / 2, headerScrollDistance],
        outputRange: [1, 0.2, 0.2],
        extrapolate: 'clamp'
    })

    const floatButton = animatedScrollY.interpolate({
        inputRange: [0, headerScrollDistance],
        outputRange: [0, -headerHeight - 20],
        extrapolate: 'clamp'
    })

    const _headerComponent = () => {
        return (
            <Animated.View
                style={{
                    flex: 1
                }}
            >
                {headerComponent()}
            </Animated.View>
        )
    }

    const _bodyComponent = () => {
        return <View style={{ flex: 1, marginTop: headerMaxHeight, paddingBottom: 80 }}>{children}</View>
    }

    const _scrollToTop = () => {
        scrollViewEl.current.getNode().scrollTo({
            y: 0,
            animated: true
        })
    }

    return (
        <Container>
            <ScrollViewContainer
                ref={scrollViewEl}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={1}
                onScrollBeginDrag={() => Keyboard.dismiss()}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: true
                })}
                ben
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={async () => {
                            setRefreshing(true)
                            if (pullToRefresh) {
                                await pullToRefresh()
                            }
                            setRefreshing(false)
                        }}
                        // Deslocamento do Android para RefreshControl
                        progressViewOffset={headerMaxHeight + 40}
                    />
                }
                // Deslocamento do iOS para RefreshControl
                contentInset={{
                    top: headerMaxHeight
                }}
                contentOffset={{
                    y: -headerMaxHeight
                }}
            >
                {_bodyComponent()}
            </ScrollViewContainer>
            <Header style={{ height: headerMaxHeight, transform: [{ translateY: headerTranslate }] }}>
                <HeaderLarge
                    style={{
                        height: headerMaxHeight,
                        transform: [{ translateY: headerContentTranslate }]
                    }}
                >
                    {_headerComponent()}
                </HeaderLarge>
            </Header>
            <FloatButton
                style={{
                    bottom: -headerHeight + 30,
                    transform: [{ translateY: floatButton }]
                }}
            >
                <ContainerIcon onPress={_scrollToTop}>
                    <Icon name='arrow-up' />
                </ContainerIcon>
            </FloatButton>
        </Container>
    )
}

export default withTheme(Parallax)
