import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Descricao from '../Peca/Descricao/Descricao'
import AdicionaDiscussao from '../Discussao/AdicionaDiscussao/adicionaDiscussao'
import DiscussaoResumo from '../Discussao/DiscussaoResumo'
import './Peca.css'

export default function Peca() {
  return ([
    <div className="peca">
      <Header />
      <Descricao/>
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