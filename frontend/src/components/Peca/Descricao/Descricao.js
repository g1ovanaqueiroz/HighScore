import React, { useState, useEffect } from 'react'
import './Descricao.css'
import './Descricao.css'

export default function Descricao(props) {
  return (
    <div className="descricao">
      <span className="aprendi-btn">{props.check}</span>
      <h1>Für Elise</h1>
      <div className="tags">
        <b><a>#piano</a> <a>#iniciante</a> <a>#ludwigVanBeethoven</a> <a>#beethoven</a> <a>#solo</a> <a>#classicismo</a> <a>#romantismo</a></b>
      </div>
      <div className="texto-descricao">
        <p>A <i>Bagatela para piano ‘Für Elise’</i>, conhecida também como Para Elisa, em lá menor (WoO 59), de Ludwig van Beethoven é, entre as obras deste compositor, talvez a mais conhecida mundialmente a par da melodia da sua famosa Quinta Sinfonia, em dó menor (1807-1808, op. 67), e da sua «Nona Sinfonia», em ré menor (1823-1824, op. 125).</p>
      </div>
      <div className="avaliar">
        <label><b> Quão difícil essa peça é:</b>
          <input type="radio" name="dificuldade" value="pp"/> <b>pp</b>
          <input type="radio" name="dificuldade" value="p"/> <b>p</b>
          <input type="radio" name="dificuldade" value="mf"/> <b>mf</b>
          <input type="radio" name="dificuldade" value="f"/> <b>f</b>
          <input type="radio" name="dificuldade" value="fff"/> <b>fff</b>
        </label>
        <label>
          <input type="submit" id="rate" value="Avaliar"/>
        </label>
      </div>
    </div>
  );
}