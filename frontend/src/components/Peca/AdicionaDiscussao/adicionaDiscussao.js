import React from 'react'
import './adicionaDiscussao.css'

export default function adicionaDiscussao() {
  return ([
    <div className="container">
      <legend><b>Iniciar nova discussão</b></legend>
      <p><b>Assunto:</b></p>
      <input name="assunto" type="text" class="form-control" id="assunto" size="50 " maxlength="20" value=""></input>
      <p><b>Descrição:</b></p>
      <textarea id="descricao" name="descricao" rows="3" cols="50"></textarea>
      <button className="adc-btn" type="submit"><b>Adicionar discussão</b></button>
    </div>
  ])
}