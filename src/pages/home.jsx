import { useContext, useEffect, useState } from 'react'

import Nav from "../components/navbar"
import Lista from "../components/itemList"
import FOOTER from '../components/footer'
import { useCarrito }  from '../contexts/contextCart';



const Home = () =>{
    const {comprar} = useCarrito();
    const[texto, setTexto] = useState('') //Estado de un input
    const cambio = (event) => {setTexto(event.target.value)}

    
    
    
    
    return  <>
            <Nav actual={"Remeras"} linkactual={"/"} otra={"Camperas"} linkotra={"/camperas"} />
            <Lista titulo={"Remeras"} />
            <input type="text" onChange={cambio}/>
            <p>{texto}</p>
            <FOOTER/>
    </>
}

export default Home