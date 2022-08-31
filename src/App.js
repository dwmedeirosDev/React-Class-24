import React from 'react'
import HomePage from './Components/HomePage'
import Contador from './Components/Contador'
import Calculadora from './Components/Calculadora'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function App(){
  return(
    <Router>
      <Link to='/'>HomePage</Link>
      <Link to='/contador'>Contador</Link>
      <Link to='/calculadora'>Calculadora</Link>
      <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/contador' element={<Contador />}/>
          <Route path='/calculadora' element={<Calculadora />}/>
      </Routes>
</Router>
  )
}