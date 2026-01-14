import { useState } from 'react'
import './App.css'
import Nav from "./components/navbar"
import Lista from "./components/itemList"
function App() {
  const [count, setCount] = useState(0)


  



  return (
    <>
      <Nav actual={"Remeras"} referencia="./tienda.jsx" otra={"Camperas"}></Nav>
      <Lista titulo={"Remeras"}></Lista>
      
    </>
  )
}

export default App