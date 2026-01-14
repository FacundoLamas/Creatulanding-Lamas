import Producto from "./productcard"

const Lista = ({titulo}) => {
    return <div id="list">
        <h2>{titulo}</h2>
            <div className="itemList" >
                <Producto img={'/remeraDeportiva.jpg'} texto={'Remeras deportivas'} ></Producto>
                <Producto img={'/remeraNegra.jpg'} texto={'Remera negra'} ></Producto>
                <Producto img={'/remeraAzul.png'} texto={'Remera azul'} ></Producto>
                <Producto img={'/remeraBlanca.jpg'} texto={'Remera blanca'} ></Producto>
                <Producto img={'/remeraVerde.png'} texto={'Remera verde'} ></Producto>
            </div>
        </div> 
        
}

export default Lista