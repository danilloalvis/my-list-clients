import React, {useState, useEffect} from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  View,
  RefreshControl,
} from 'react-native';

const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;

export default Parallax = ({headerHeight, children, headerComponent}) => {
  const [headerMaxHeight, setHeaderMaxHeight] = useState(300);
  const [headerScrollDistance, setHeaderScrollDistance] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [animatedScrollY, setAnimatedScrollY] = useState(new Animated.Value(0));

  useEffect(() => {
    setHeaderScrollDistance(headerMaxHeight - HEADER_MIN_HEIGHT);
    setScrollY(
      new Animated.Value(
        // O iOS tem um valor de rolagem inicial negativo porque o conteúdo é inserido...
        Platform.OS === 'ios' ? -headerHeight : 0,
      ),
    );
    setHeaderMaxHeight(headerHeight || 300);
  }, [headerHeight]);

  useEffect(() => {
    //Devido à inserção do conteúdo, o valor da rolagem será negativo no iOS, então, retorne a 0.
    setAnimatedScrollY(
      Animated.add(scrollY, Platform.OS === 'ios' ? headerMaxHeight : 0),
    );
  }, [scrollY]);

  const headerTranslate = animatedScrollY.interpolate({
    inputRange: [0, headerScrollDistance],
    outputRange: [0, -headerScrollDistance],
    extrapolate: 'clamp',
  });

  const imageTranslate = animatedScrollY.interpolate({
    inputRange: [0, headerScrollDistance],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const headerScale = animatedScrollY.interpolate({
    inputRange: [0, headerScrollDistance / 2, headerScrollDistance],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });
  const titleTranslate = animatedScrollY.interpolate({
    inputRange: [0, headerScrollDistance / 2, headerScrollDistance],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });

  const _headerComponent = () => {
    return (
      <Animated.View
        style={{
          flex: 1,
          transform: [{scale: headerScale}, {translateY: titleTranslate}],
        }}>
        {headerComponent()}
      </Animated.View>
    );
  };

  const _bodyComponent = () => {
    return (
      <View style={{flex: 1, marginTop: headerMaxHeight}}>{children}</View>
    );
  };

  return (
    <View style={styles.fill}>
      <Animated.ScrollView
        style={styles.fill}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => setRefreshing(false), 1000);
            }}
            // Deslocamento do Android para RefreshControl
            progressViewOffset={headerMaxHeight + 40}
          />
        }
        // Deslocamento do iOS para RefreshControl
        contentInset={{
          top: headerMaxHeight,
        }}
        contentOffset={{
          y: -headerMaxHeight,
        }}>
        {_bodyComponent()}
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          {height: headerMaxHeight, transform: [{translateY: headerTranslate}]},
        ]}>
        <Animated.View
          style={[
            styles.headerLarge,
            {
              height: headerMaxHeight,
              transform: [{translateY: imageTranslate}],
            },
          ]}>
          {_headerComponent()}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  headerLarge: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    resizeMode: 'cover',
  },
});
