import React, { useEffect } from "react";
import { useState } from 'react'



const carta = ({img,texto , suma}) =>{
    const [clase,setClase] = useState("productcard ")
    function handleChange (){
        // setClase((previo) => previo === 'productcard Touched' ? 'productcard Untouched ' : 'productcard Touched')
        setClase("productcard Touched");
        setTimeout(() => setClase("productcard Untouched"),100);
        suma(texto);
    }
    
    return <div className={clase} >
                <img src={img} alt=""/>
                <span style={{color:'black'}}>{texto}</span>
                <button   onClick={handleChange}>Comprar</button>
            </div>
}


export default carta