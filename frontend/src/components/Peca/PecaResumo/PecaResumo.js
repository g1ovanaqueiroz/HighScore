import React, { useState, useEffect } from 'react';
import './PecaResumo.css'

export default function PecaResumo (props) {
  return (
    <div className='peca-resumo-container'>
      <form id="resumo-pecas">
      <a href='/peca' title="Abrir peça">
        <div className='peca-resumo'>
          <h3>{props.nomePeca}</h3>
          <b>{props.tags}</b>
        </div>
      </a>
      </form>
    </div>
  );
}