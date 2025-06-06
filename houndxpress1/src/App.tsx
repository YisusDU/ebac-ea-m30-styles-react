import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import Header from "./components/Header";
import Banner from "./components/Banner";
import GuideRegister from "./components/GuideReguister";
import GeneralState from "./components/GeneralState";
import GuideList from "./components/GuideList";
import Footer from "./components/Footer";
import ModalHistory from "./components/Modals/ModalHistory";
import ModalUpdate from "./components/Modals/ModalUpdate";

const App = () => {
  //function to change display of menu to fixed or relative
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  //Function to listen the scroll event and change the display of the menu
  useEffect(() => {
    const changeDisplay = () => {
      if (window.scrollY > 165) {
        setMenuDisplay(true);
      } else {
        setMenuDisplay(false);
      }
    };
    window.addEventListener("scroll", changeDisplay);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", changeDisplay);
  }, []);

  //Take the height of header when change menuDisplay to true
  useEffect (() => {
    if(menuDisplay && headerRef.current){
      setHeaderHeight(headerRef.current.offsetHeight);
    } else{
      setHeaderHeight(0);
    }
  }, [menuDisplay]);

  //Aply height of header to main element
  useEffect(() => {
    if(mainRef.current){
      mainRef.current.style.marginTop= `${headerHeight}px`
    }

  }, [headerHeight]);

  

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header ref={headerRef} menuDisplay={menuDisplay}/>
      <main ref={mainRef}>
        <Banner />
        <GuideRegister />
        <GeneralState />
        <GuideList />
      </main>
      <Footer />
      <ModalHistory />
      <ModalUpdate />
    </ThemeProvider>
  );
};

export default App;
