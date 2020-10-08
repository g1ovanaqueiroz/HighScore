import React, { useState, useEffect } from 'react'
import 'Discussao.css'

export default function Discussao (props) {
  return (
    <div className="discussao">
      <fieldset>
        <h3>{props.resumo}</h3>
        {props.descricao}
      </fieldset>
    </div>
  );
}
