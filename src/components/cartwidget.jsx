import Producto from "./productcard"

const carrito=({items}) =>{
    return <>
        <div id="cartwidget">                            
            <button type="button">               
                <img src="/carrito.svg" alt=""/>  
                <span>{items}</span>
            </button>
        </div>
        
    </>
    
}

export default carrito