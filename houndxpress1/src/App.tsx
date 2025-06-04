import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import Header from "./components/Header";
import Banner from "./components/Banner";
import GuideRegister from "./components/GuideReguister";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Banner />
        <GuideRegister />
      </main>
    </ThemeProvider>
  );
};

export default App;
