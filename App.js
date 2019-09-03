import React from 'react';
import Main from './src/main';
import {ThemeProvider} from 'styled-components';
import light from './src/theme/light';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
