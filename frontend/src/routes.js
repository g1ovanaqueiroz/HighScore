import { BrowserRouter, Route } from  'react-router-dom'
import React from 'react'
import Main from './components/Pages/Main'
import Peca from './components/Pages/Peca'
import Discussao from './components/Discussao/Discussao'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Main}/>
      <Route path='/peca' exact component={Peca}/>
      <Route path='/discussao' exact component={Discussao}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/register' exact component={Register}/>
    </BrowserRouter>
  );
}