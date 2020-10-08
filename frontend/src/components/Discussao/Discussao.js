import React, {Component} from 'react'
import 'Discussao.css'

export default function Discussao (props) {
  return (
    <div className="discussao">
      <fieldset>
        <h3>{this.props.resumo}</h3>
        {this.props.descricao}
      </fieldset>
    </div>
  );
}
