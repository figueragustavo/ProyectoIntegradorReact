import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cards from './components/Cards';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Main />
      <Footer />
    </AppContextProvider>
  );
}

export default App;
