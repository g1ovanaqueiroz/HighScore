import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Comentario from './components/Comentario'

function App() {
  return (
    <div className="App">
      <Comentario nomeUsuario="Julia Hermitacila" comentarioConteudo="Eu acho que o clássico 'aprenda cada mão separadamente' não serve tanto nessa hora, talvez tentar aprender pequenas frases usando as duas mãos juntas e depois juntar as partes pode ser uma boa opção!"></Comentario>
    </div>
  );
}

export default App;
