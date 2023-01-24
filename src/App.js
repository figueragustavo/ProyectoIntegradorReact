import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Favoritos from "./components/Favoritos";
import AppContextProvider from "./context/AppContext";
import Carrusel from './components/Carrusel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Header />
        <Carrusel />
        <Main />
        <Footer />
        <Favoritos />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
