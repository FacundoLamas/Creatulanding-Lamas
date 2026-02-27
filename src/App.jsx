import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Camperas from './components/camperas'
import Detalle from './components/detalle'
function App() {
  





  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/camperas" element={<Camperas/>}/>
        <Route path='/detalle/:id' element={<Detalle/>}/>
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App