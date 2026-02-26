import { useState } from "react";
import Producto from "./productcard"

const carrito=({items, compra}) =>{
    const [visibilidad, setVisibilidad] = useState(true)


    // Esta funcion solo existe para switchear entre el montaje del carrito o no.
    function mostrar(){
        setVisibilidad(!visibilidad);
    }






    return <>
        <div id="cartwidget" >                            
            <button type="button"  onClick={() => mostrar()} >               
                <img src="/carrito.svg" alt=""/>  
                <span>{items}</span>
            </button>
            {visibilidad ? <></> : <div id="popuplista">
                    <ul>
                        {compra.compras.map((objeto,index) => <li key={index}><img src="public\trash.png" onClick={()=>compras.eliminarcompra(objeto,index)} alt="" />{objeto}</li>)}
                    </ul>
                </div>}
        </div>
        
        
    </>
    
}

export default carrito