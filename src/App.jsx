import { useEffect, useState } from 'react'
import './App.css'
import Nav from "./components/navbar"
import Lista from "./components/itemList"
import FOOTER from './components/footer'

function App() {
  const [compra, setCompra] = useState(null)
  
  
  const [dato, setdato]= useState([])
  function comprar ( objeto ){
    setdato([...dato,objeto]);
  }
  function eliminarcompra (objeto,index){
    setdato(dato.filter((objeto,indice) => index !== indice));
  }
  const[texto, setTexto] = useState('')
  const cambio = (event) => {setTexto(event.target.value)}
  function contar (array){
    let count=0;
    array.forEach(element => {
      count++;
    });
    return count;
  }

  return (
    <>
      <Nav actual={"Remeras"} referencia="./App.jsx" otra={"Camperas"} compras={{dato,eliminarcompra}} itemsCarrito={contar(dato)} />
      <Lista titulo={"Remeras"} funcion={comprar}  />
      <input type="text" onChange={cambio}/>
      <p>{texto}</p>
      <FOOTER/>
    </>
  )
}

export default App