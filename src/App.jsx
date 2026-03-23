import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Camperas from './pages/camperas'
import Detalle from './components/detalle'
import contextThin from './assets/contex';
function App() {
  





  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/camperas" element={<Camperas/>}/>
        <Route path='/detalle/:id' element={<Detalle/>}/>  {/*Aca lo que tengo es un enrutamiento por id, con los ":" Marco que es un parametro dinamico y que se generen rutas para cada vez que cree uno en ITEMLIST */}
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App