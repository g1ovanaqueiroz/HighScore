import React, { useState, useEffect } from 'react';
import './PecaResumo.css'

export default function PecaResumo (props) {
  return (
    <div class='peca-resumo'>
      <a href="./">
        <h3>{props.nomePeca}</h3>
        <b>{props.tags}</b>
      </a>
    </div>
  );
}