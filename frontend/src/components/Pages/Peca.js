import React from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import Descricao from '../Peca/Descricao.js'

export default function Peca() {
  return ([
    <div className="main">
      <Header />
      <Descricao/>
      <Footer />
    </div>
  ])
}