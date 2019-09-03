import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})``;

const Items = styled(DrawerNavigatorItems).attrs(({theme}) => ({
  activeTintColor: '#fff',
  inactiveTintColor: '#fff',
}))``;

export {Container, ScrollContainer, Items};
