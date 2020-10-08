import React, { useState, useEffect } from 'react';

export default function Comentario (props) {
  const [curtido, setCurtido] = useState(undefined)
  const curtir = () => setCurtido(this.curtirResult())
  const naoCurtir = () => setCurtido(this.naoCurtirResult())
  return (
    <div className="comentario">
      <fieldset>
        <h4>{props.nomeUsuario}</h4>
        {props.comentarioConteudo}
        <button onClick={curtir}>gostei</button>
        <button onClick={naoCurtir}>não gostei</button>
        <input type="text"></input>
        <button>Responder</button>
      </fieldset>
    </div>
  );
}

function curtirResult() {
  if (!curtido) {
    return true;
  } else if (curtido) {
    return undefined;
  }
}

function naoCurtirResult() {
  if (curtido == undefined) {
    return false;
  } else if (curtido == false) {
    return undefined;
  }
}