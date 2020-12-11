import React from 'react';
import './Header.css';
import logo from '../assets/highscore_icon.png';

export default function Header(props) {
  return (
    <div className='header-content'>
      <a href='/'>
        <img className="logo" src={logo} alt="HighScore Icon" title="Página inicial"/>
      </a>
      <div className='login'><a href='/login'>{props.login}</a></div>
      <div className='high-score' title="Página inicial"><h2><a href='/'>HighScore</a></h2></div>
      <div className='pesquisa'>
        <input type="text" />
        <button className="submit-lente" title="Pesquisar" type="submit"><span role="img" aria-label="imagem de lupa">&#x1F50E;</span></button>
      </div>
    </div>
  );
}