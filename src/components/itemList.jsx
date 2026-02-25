import { useState, useEffect } from "react"
import Producto from "./productcard"
import { obtenerProductos } from "../services/users"

// Obtener user es un servicio que trae la data de los usuarios de empleados como data.
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
            {/* Aca se usa una funcion asincrona que me trae el servicio de users, malnombreado por que me trae los productos
            tengo que cambiarle el nombre pero no tengo ganas aun */}
            {datos ? <p id="cargando" >Cargando . . .</p> :  
                        <div className="itemList">
                            {user.map((objeto,index) => <Producto suma={funcion} key={index} texto={objeto.producto} img={objeto.img}/>)}
                        </div>
                    }
        </div> 
        
}

export default Lista