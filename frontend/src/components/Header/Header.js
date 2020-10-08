import React from 'react';
import './Header.css';
import logo from '../assets/highscore_icon.png';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <a href='/'><img className="logo" src={logo} alt="HighScore Icon"/></a>
        <div className='high-score'><h2><a href='/'>HighScore</a></h2></div>
        <div class='pesquisa'>
          <input type="text" />
          <button class="submit-lente" type="submit"><span role="img" aria-label="imagem de lupa">&#x1F50E;</span></button>
        </div>
        <form/>
      </div>
    </div>
  );
}