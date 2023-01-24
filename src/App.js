import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Favoritos from "./components/Favoritos";
import AppContextProvider from "./context/AppContext";
import Carrusel from './components/Carrusel';




function App() {
  return (
    <AppContextProvider>
      <Header />
      <Carrusel />
      <Main />
      <Footer />
      <Favoritos />
    </AppContextProvider>
  );
}

export default App;
