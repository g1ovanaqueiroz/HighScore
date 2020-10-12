import React, { useState, useEffect } from 'react';

export default function Comentario (props) {
  const [curtido, setCurtido] = useState(undefined)
  const curtir = () => setCurtido(curtirResult())
  const naoCurtir = () => setCurtido(naoCurtirResult())
  return (
    <div className="comentario">
      <fieldset>
        <div className="text">
        <h4>{props.nomeUsuario}</h4>
        {props.comentarioConteudo}
        </div>
        <button onClick={curtir}>gostei</button>
        <button onClick={naoCurtir}>não gostei</button>
        <input type="text"></input>
        <button>Responder</button>
      </fieldset>
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