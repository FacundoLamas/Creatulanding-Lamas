import { useState } from "react";
import Producto from "./productcard"
import { useContext } from "react";
import { CarritoProvider,useCarrito } from "../contexts/contextCart";
const carrito=() =>{
    const [visibilidad, setVisibilidad] = useState(true)
    const {compras,eliminarcompra} = useCarrito();

    // Esta funcion solo existe para switchear entre el montaje del carrito o no.
    function mostrar(){
        setVisibilidad(!visibilidad);
    }






    return <>
        <div id="cartwidget" >                            
            <button type="button"  onClick={() => mostrar()} >               
                <img src="/carrito.svg" alt=""/>  
                <span>{compras.length}</span>
            </button>
            {visibilidad ? <></> : <div id="popuplista">
                    <ul>
                        {compras.map((objeto,index) => <li key={index}><img src="/trash.png" onClick={()=>eliminarcompra(objeto,index)} alt="" />{objeto}</li>)}
                    </ul>
                </div>}
        </div>
        
        
    </>
    
}

export default carrito