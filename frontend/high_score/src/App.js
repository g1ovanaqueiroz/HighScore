import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Discussao from './components/Discussao'

function App() {
  return (
    <div className="App">
      <Discussao resumo="Compassos 12 ao 15" descricao="Estou como confusa com o que fazer nessa parte em que as mãos ficam alternando entre si, porque em todas as peças
      que aprendi
      até agora basicamente a mão esquerda só fazia o acompanhamento para a mão direita, que tocava a melodia. Nessa
      parte
      é como se a mão esquerda invadisse a parte da mão direita e dividisse a melodia com ela. Alguma dica de como
      estudar
      essa parte?"></Discussao>
    </div>
  );
}

export default App;
