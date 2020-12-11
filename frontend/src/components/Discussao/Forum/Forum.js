import React from 'react'
import Comentario from '../Comentario/Comentario'
import './Forum.css'

export default function Forum() {
  return ([
    <div className="forum-container">

      <h2><b>Fórum</b></h2>

      <div className="comentarios">
        <Comentario nomeUsuario="Julia Hermitacila" comentarioConteudo="Eu acho que o clássico 'aprenda cada mão separadamente' não serve tanto nessa hora, talvez tentar aprender pequenas frases usando as duas mãos juntas e depois juntar as partes pode ser uma boa opção!"/>
        <Comentario nomeUsuario="2setViolin" comentarioConteudo="Se você pode tocar devagar, você pode tocar rápido ;)"/>
        <Comentario nomeUsuario="Franz Lizt" comentarioConteudo="Você diz isso porque não começou a estudar as minhas peças ainda hahahahaha"/>
      </div>

      <div className="novos-comentarios">
        <p>Participe da discussão:</p>
        <textarea id="comentarios" name="comentario" rows="4" cols="100"> </textarea>
        <button className="submit-comment btn" type="submit">Publicar</button>
      </div>
    </div>
  ])
}