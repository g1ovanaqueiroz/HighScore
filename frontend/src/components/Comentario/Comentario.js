import React, {Component} from 'react';

export default function Comentario (props) {
  return (
    <div className="comentario">
      <fieldset>
        <h4>{props.nomeUsuario}</h4>
        {props.comentarioConteudo}
        <button onClick={this.curtir}>gostei</button>
        <button onClick={this.naoCurtir}>não gostei</button>
        <input type="text"></input>
        <button>Responder</button>
      </fieldset>
    </div>
  );
}

function curtir() {
  if (!this.state.curtido) {
    this.setState({curtido:true});
  } else if (this.state.curtido) {
    this.setState({curtido:undefined});
  }
}

function naoCurtir () {
  if (this.state.curtido == undefined) {
    this.setState({curtido:false});
  } else if (this.state.curtido == false) {
    this.setState({curtido:undefined});
  }
}