import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Descricao from '../../Peca/Descricao/Descricao'
import AdicionaDiscussao from '../../Discussao/AdicionaDiscussao/adicionaDiscussao'
import DiscussaoResumo from '../../Discussao/DiscussaoResumo'
import './Peca.css'

export default function Peca() {
  const [aprendi, setAprendi] = useState("Ainda não aprendi")

  function aprender() {
    if (aprendi === "Ainda não aprendi") {
      setAprendi("Aprendi");
    }
    else {
      setAprendi("Ainda não aprendi");
    }
  }

  return ([
    <div className="peca">
      <Header />
      <div class="switch__container">
        <input onClick={aprender} id="switch-shadow" class="switch switch--shadow" type="checkbox" />
        <label for="switch-shadow"></label>
    </div>
      <Descricao check={aprendi}/>
      <AdicionaDiscussao></AdicionaDiscussao>
      <div className="discussoes-abertas">
        <h2>Discussões abertas</h2>
        <DiscussaoResumo resumo ="Compassos 12 ao 15" descricao="Estou como confusa com o que fazer nessa parte em que as mãos ficam alternando entre si, porque em todas as peças
          que aprendi
          até agora basicamente a mão esquerda só fazia o acompanhamento para a mão direita, que tocava a melodia. Nessa
          parte
          é como se a mão esquerda invadisse a parte da mão direita e dividisse a melodia com ela. Alguma dica de como
          estudar
          essa parte?"></DiscussaoResumo>
      </div>
      <Footer/>
    </div>
  ])
}