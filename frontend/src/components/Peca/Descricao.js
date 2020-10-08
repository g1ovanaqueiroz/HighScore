import React, { useState, useEffect } from 'react'
import './Descricao.css'
import compasso from '../assets/fur_elise.png'

export default function Descricao (props) {
  return (
    <div className="descricao">
      <h1>Für Elise</h1>
      <div className="compasso">
        <img alt="compassos iniciais de fur elise" src={compasso}/>
      </div> 
      <aside>
        <div className="tags">
          <b><div>#piano</div> <div>#iniciante</div> <div>#ludwigVanBeethoven</div> <div>#beethoven</div> <div>#solo</div> <div>#classicismo</div> <div>#romantismo</div></b>
        </div>
        <div className="textoDescricao">
          <p>A <i>Bagatela para piano ‘Für Elise’</i>, conhecida também como Para Elisa, em lá menor (WoO 59), de Ludwig van Beethoven é, entre as obras deste compositor, talvez a mais conhecida mundialmente a par da melodia da sua famosa Quinta Sinfonia, em dó menor (1807-1808, op. 67), e da sua «Nona Sinfonia», em ré menor (1823-1824, op. 125).</p>
        </div>
      </aside>
      <label><b> Quão difícil essa peça é:</b>
        <input type="radio" name="cargo" value="pp" checked/> <b>pp</b>
        <input type="radio" name="cargo" value="p"/> <b>p</b>
        <input type="radio" name="cargo" value="mf"/> <b>mf</b>
        <input type="radio" name="cargo" value="f"/> <b>f</b>
        <input type="radio" name="cargo" value="fff"/> <b>fff</b>
      </label>
      <div className="avaliar">
        <label>
          <input type="submit" name="fav" value="Avaliar"/>
        </label>
      </div>
      <hr/>
    </div>
  );
}