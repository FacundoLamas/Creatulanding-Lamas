import { useEffect, useState } from 'react'

import Nav from "./navbar"
import Lista from "./itemList"
import FOOTER from './footer'



const Home = () =>{
    
    const [compras, setCompras]= useState([])  //Array de compras
    const[texto, setTexto] = useState('') //Estado de un input
    
    function comprar ( objeto ){
        setCompras([...compras,objeto]);
    }
    function eliminarcompra (objeto,index){
        setCompras(compras.filter((objeto,indice) => index !== indice));
    }
    
    const cambio = (event) => {setTexto(event.target.value)}


    function contar (array){
        let count=0;
        array.forEach(element => {
        count++;
        });
        return count;
    }
    
    
    
    return  <>
            <Nav actual={"Remeras"} linkactual={"/"} otra={"Camperas"} linkotra={"/camperas"} compra={{compras,eliminarcompra}} itemsCarrito={contar(compras)} />
            <Lista titulo={"Remeras"} funcion={comprar}  />
            <input type="text" onChange={cambio}/>
            <p>{texto}</p>
            <FOOTER/>
    </>
}

export default Home