import React from 'react';
import logo from '../assets/highscore_icon.png';
import './Header.css'

export default function LoginHeader() {
  return (
    <div className='header-content'>
      <a href='/'>
        <img className="logo" src={logo} alt="HighScore Icon"/>
      </a>
      <div className='login'><a href='/register'>Cadastre-se já!</a></div>
      <div className='high-score' title="Página inicial"><h2><a href='/'>HighScore</a></h2></div>
    </div>
  );
}