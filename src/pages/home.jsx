import { useEffect, useState } from 'react'

import Nav from "../components/navbar"
import Lista from "../components/itemList"
import FOOTER from '../components/footer'
import contextThin from '../contex';



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