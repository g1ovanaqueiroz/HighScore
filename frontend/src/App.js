import React, {Component} from 'react';
import './App.css';

import Comentario from './components/Comentario/Comentario'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
