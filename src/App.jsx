import { useState } from 'react'
import './App.css'
import Nav from "./components/navbar"
import Lista from "./components/itemList"
import FOOTER from './components/footer'
function App() {
  const [count, setCount] = useState(0)


  



  return (
    <>
      <Nav actual={"Remeras"} referencia="./App.jsx" otra={"Camperas"}></Nav>
      <Lista titulo={"Remeras"}></Lista>
      <FOOTER></FOOTER>
    </>
  )
}

export default App