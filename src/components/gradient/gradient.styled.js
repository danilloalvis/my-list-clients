import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const GradiendView = styled(LinearGradient).attrs(({theme}) => {
  colors: theme.colors.backgroundGradient;
})``;

export {GradiendView};
