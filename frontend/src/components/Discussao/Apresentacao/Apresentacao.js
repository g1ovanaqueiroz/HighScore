import React, { useState, useEffect } from 'react'
import './Apresentacao.css'

export default function Apresentacao (props) {
  return (
    <div className="apresentacao">
      <h2>{props.resumo}</h2>
      {props.descricao}
    </div>
  );
}