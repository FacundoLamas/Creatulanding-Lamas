import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from "./components/button"
import Nav from "./components/navbar"
import Carrito from "./components/cartwidget"
import Lista from "./components/itemList"
function App() {
  const [count, setCount] = useState(0)


  



  return (
    <>
      <Nav actual={"Principal"} referencia="./tienda.jsx" otra={"Tienda"}></Nav>
      <Lista></Lista>
      
    </>
  )
}

export default App