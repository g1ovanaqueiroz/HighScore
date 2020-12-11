import React, { useState, useEffect } from 'react';
import './Comentario.css'

export default function Comentario (props) {
  const [curtido, setCurtido] = useState(undefined)
  const curtir = () => setCurtido(curtirResult())
  const naoCurtir = () => setCurtido(naoCurtirResult())
  return (
    <div className="comentario">
      <div className="text">
        <h4>{props.nomeUsuario}</h4>
        {props.comentarioConteudo}
      </div>
      <div className="botoes">
        <div className="curtidas">
          <button className="like" onClick={curtir}>gostei</button>
          <button className="dislike" onClick={naoCurtir}>não gostei</button>
        </div>
      </div>
    </div>
  );

function curtirResult() {
  if (!curtido) {
    return true;
  } else {
    return undefined;
  }
}

function naoCurtirResult() {
  if (curtido == false) {
    return undefined;
  } else {
    return false;
  }
}
}