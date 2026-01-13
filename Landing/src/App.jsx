import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from "./components/button"
import Nav from "./components/navbar"

function App() {
  const [count, setCount] = useState(0)


  



  return (
    <>
      <Nav actual={"Principal"} referencia="./tienda.jsx" otra={"Tienda"}></Nav>
      <Boton id="hola" label={"Hola"}>  </Boton>
    </>
  )
}

export default App
