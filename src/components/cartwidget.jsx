import { useState } from "react";
import Producto from "./productcard"

const carrito=({items, compras}) =>{
    const [visibilidad, setVisibilidad] = useState(true)


    function mostrar(arr){
        setVisibilidad(!visibilidad);
        () => console.log(arr)
    }






    return <>
        <div id="cartwidget" >                            
            <button type="button"  onClick={() => mostrar(compras.dato)} >               
                <img src="/carrito.svg" alt=""/>  
                <span>{items}</span>
            </button>
            {visibilidad ? <></> : <div id="popuplista">
                    <ul>
                        {compras.dato.map((objeto,index) => <li key={index}><img src="public\trash.png" onClick={()=>compras.eliminarcompra(objeto,index)} alt="" />{objeto}</li>)}
                    </ul>
                </div>}
        </div>
        
        
    </>
    
}

export default carrito