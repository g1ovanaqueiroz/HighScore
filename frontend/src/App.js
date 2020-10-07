import React, {Component} from 'react';
import './App.css';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PecaResumo from './components/Peca/PecaResumo'


function App() {
  return (
    <div className="peca-resumo">
      <header><Header></Header></header>
      <PecaResumo></PecaResumo>
      <Footer></Footer>
    </div>
  );
}

export default App;
