import { useState, useEffect } from "react"
import Producto from "./productcard"
import { obtenerProductos } from "../services/products"

// Obtener productos es un servicio que trae los productos de cada pagina como data.
// Viene como un array de objetos JS

const Lista = ({titulo, funcion}) => {
    const [user, setUser] = useState([])
    const [datos, setDatos] = useState(true)

    useEffect(()=>{
        obtenerProductos()
            .then((respuesta) => {
                console.log("Datos Encontrados",respuesta.data);
                setUser(respuesta.data)
                setTimeout(() => setDatos(false),5000)
            })
            .catch((respuesta) => {
                console.error("Datos no encontrados");
            })
    },[])


    
    return <div id="list">
            <div className="nameList">
                <h2>{titulo}</h2>
            </div>
            {datos ? <p id="cargando" >Cargando . . .</p> :  
                        <div className="itemList">
                            {user.map((objeto,index) => <Producto suma={funcion} key={index} texto={objeto.producto} img={objeto.img}/>)}
                        </div>
                    }
        </div> 
        
}

export default Lista