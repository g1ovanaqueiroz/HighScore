import React, { useState, useEffect } from 'react'
import './DiscussaoResumo.css'

export default function DiscussaoResumo (props) {
  return (
    <div className="discussao">
      <a href='/discussao'>
        <div className="content">
          <h3>{props.resumo}</h3>
          {props.descricao}
        </div>
      </a>
    </div>
  );
}
