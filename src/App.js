import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Favoritos from "./components/Favoritos";
import AppContextProvider from "./context/AppContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;