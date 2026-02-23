import React, { useEffect } from "react";
import { useState } from 'react'



const carta = ({img,texto , suma}) =>{
    const [clase,setClase] = useState("productcard ")
    function handleChange (){
        setClase((previo) => previo === 'productcard Touched' ? 'productcard Untouched ' : 'productcard Touched')
    }
    
    return <div className={clase} onClick={handleChange}>
                <img src={img} alt=""/>
                <span style={{color:'black'}}>{texto}</span>
                <button  onClick={suma}>Comprar</button>
            </div>
}
// const carta = ({data}) => {
//     return <div className="productcard">
//             <p style={{color:"black"}}>{data.nombre}</p>
//         </div>
// }

export default carta