import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import PecaResumo from '../../Peca/PecaResumo/PecaResumo'
import './Main.css'
import axios from 'axios'

export default function Main() {
  const [pecas, setPecas] = useState("")

  useEffect (async () => {
    const response = await axios.get('http://localhost:8080/peca/findall');
    const data = await response.data
    setPecas(data)
  })
  
  return ([
    <div className="main">
      <Header login="login"/>
      <PecaResumo nomePeca="Für Elise" tags="#piano #iniciante #ludwigVanBeethoven #beethoven #solo #classicismo #romantismo"></PecaResumo>
      <Footer />
    </div>
  ])
}