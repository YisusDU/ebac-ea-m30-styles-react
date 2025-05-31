import React from 'react';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import Theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles"


const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
        <div className="App">
          <Header />
        </div>
    </ThemeProvider>
  );
}

export default App;
