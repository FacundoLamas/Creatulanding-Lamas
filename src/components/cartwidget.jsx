import Producto from "./productcard"

const carrito=({items}) =>{
    return <>
        <div id="cartwidget">                            
            <button type="button">               
                <img src="/carrito.svg" alt=""/>  
                <span>1</span>
            </button>
        </div>
        
    </>
    
}

export default carrito