import React from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import PecaResumo from '../Peca/PecaResumo'

export default function Main() {
  return ([
    <div className="main">
      <Header />
      <PecaResumo nomePeca="Für Elise" tags="#piano #iniciante #ludwigVanBeethoven #beethoven #solo #classicismo #romantismo"></PecaResumo>
      <Footer />
    </div>
  ])
}