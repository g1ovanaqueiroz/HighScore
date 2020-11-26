import React, { useState, useEffect } from 'react';
import './PecaResumo.css'

export default function PecaResumo (props) {
  return (
    <div className='container'>
      <a href='/peca' title="Abrir peça">
        <div class='peca-resumo'>
          <h3>{props.nomePeca}</h3>
          <b>{props.tags}</b>
        </div>
      </a>
    </div>
  );
}