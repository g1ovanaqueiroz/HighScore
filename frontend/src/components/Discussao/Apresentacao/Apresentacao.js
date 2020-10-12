import React, { useState, useEffect } from 'react'

export default function Apresentacao (props) {
  return (
    <div className="apresentacao">
      <h2>{props.resumo}</h2>
      {props.descricao}
    </div>
  );
}