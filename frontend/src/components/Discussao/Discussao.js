import React, { useState, useEffect } from 'react'
import './Discussao.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Apresentacao from './Apresentacao/Apresentacao';
import Forum from './Forum/Forum'

export default function Discussao (props) {
  return (
    <div className="discussao">
      <Header></Header>
      <Apresentacao resumo ="Compassos 12 ao 15" descricao="Estou como confusa com o que fazer nessa parte em que as mãos ficam alternando entre si, porque em todas as peças
        que aprendi
        até agora basicamente a mão esquerda só fazia o acompanhamento para a mão direita, que tocava a melodia. Nessa
        parte
        é como se a mão esquerda invadisse a parte da mão direita e dividisse a melodia com ela. Alguma dica de como
        estudar
        essa parte?"></Apresentacao>
        <Forum></Forum>
      <Footer></Footer>
    </div>
  );
}