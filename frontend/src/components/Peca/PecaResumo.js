import React, { useState, useEffect } from 'react';
import './PecaResumo.css'

export default function PecaResumo (props) {
  return (
    <div className='peca-resumo'>
      <a href="./">
        <fieldset>
          <h3>{props.nomePeca}</h3>
          <b>{props.tags}</b>
        </fieldset>
      </a>
    </div>
  );
}