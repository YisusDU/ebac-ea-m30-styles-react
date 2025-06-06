import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import Header from "./components/Header";
import Banner from "./components/Banner";
import GuideRegister from "./components/GuideReguister";
import GeneralState from "./components/GeneralState";
import GuideList from "./components/GuideList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Banner />
        <GuideRegister />
        <GeneralState />
        <GuideList />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
