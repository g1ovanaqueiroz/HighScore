import { BrowserRouter, Route } from  'react-router-dom'
import React from 'react'
import Main from './components/Pages/Main'
import Peca from './components/Pages/Peca'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Main}/>
      <Route path='/peca' exact component={Peca}/>
    </BrowserRouter>
  );
}