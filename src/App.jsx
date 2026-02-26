import { useEffect, useState } from 'react'
import './App.css'
import Nav from "./components/navbar"
import Lista from "./components/itemList"
import FOOTER from './components/footer'

function App() {
  const [compras, setCompras]= useState([])  //Array de compras
  
  
  
  function comprar ( objeto ){
    setCompras([...compras,objeto]);
  }
  function eliminarcompra (objeto,index){
    setCompras(compras.filter((objeto,indice) => index !== indice));
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
      <Nav actual={"Remeras"} referencia="./App.jsx" otra={"Camperas"} compra={{compras,eliminarcompra}} itemsCarrito={contar(compras)} />
      <Lista titulo={"Remeras"} funcion={comprar}  />
      <input type="text" onChange={cambio}/>
      <p>{texto}</p>
      <FOOTER/>
    </>
  )
}

export default App