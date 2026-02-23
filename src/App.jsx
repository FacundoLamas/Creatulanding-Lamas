import { useEffect, useState } from 'react'
import './App.css'
import Nav from "./components/navbar"
import Lista from "./components/itemList"
import FOOTER from './components/footer'
import carta from './components/productcard'

function App() {
  const [compra, setCompra] = useState(null)
  
  
  const [dato, setdato]= useState(0)
  function recibir ( ){
    setdato(dato+1);
  }
  const[texto, setTexto] = useState('')
  const cambio = (event) => {setTexto(event.target.value)}
  

  return (
    <>
      <Nav actual={"Remeras"} referencia="./App.jsx" otra={"Camperas"} itemsCarrito={dato} />
      <Lista titulo={"Remeras"} funcion={recibir} />
      <input type="text" onChange={cambio}/>
      <p>{texto}</p>
      <FOOTER/>
    </>
  )
}

export default App