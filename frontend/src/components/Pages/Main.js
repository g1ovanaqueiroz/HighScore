import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PecaResumo from '../Peca/PecaResumo/PecaResumo'

export default function Main() {
  return ([
    <div className="main">
      <Header login="login"/>
      <PecaResumo nomePeca="Für Elise" tags="#piano #iniciante #ludwigVanBeethoven #beethoven #solo #classicismo #romantismo"></PecaResumo>
      <Footer />
    </div>
  ])
}