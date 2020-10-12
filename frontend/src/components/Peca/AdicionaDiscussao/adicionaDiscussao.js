import React from 'react'

export default function adicionaDiscussao() {
  return ([
    <div className="container">
      <fieldset>
        <legend><b>Iniciar nova discussão</b></legend>
        <div className="assunto">
          <label><b>Assunto:</b></label>
          <input name="assunto" type="text" class="form-control" id="assunto" size="50 " maxlength="20" value=""></input>
        </div>
        <div className="descricao">
          <label><b>Descrição:</b></label>
          <textarea id="descricao" name="descricao" rows="3" cols="50"></textarea>
        </div>
      </fieldset>
    </div>
  ])
}