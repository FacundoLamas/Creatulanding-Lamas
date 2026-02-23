import { useState, useEffect } from "react"
import Producto from "./productcard"
import { obtenerUser } from "../services/users"

const Lista = ({titulo, funcion}) => {
    
    const [users, setUsers] = useState([])




    //     useEffect(() => {
    //     obtenerUser()
    //         .then((response) => {
    //             console.log("Datos encontrados", response);
    //             setUsers(response.data); 
    //         })
    //         .catch((err) => {
    //             console.error("Error al obtener los datos:", err);

    //         });
    // }, []);


    
    return <div id="list">
            <div className="nameList">
                <h2>{titulo}</h2>
            </div>
            <div className="itemList" >
                <Producto suma ={funcion} img={'/remeraDeportiva.jpg'} texto={'Remeras deportivas'} ></Producto>
                <Producto suma ={funcion} img={'/remeraNegra.jpg'} texto={'Remera negra'} ></Producto>
                <Producto suma ={funcion} img={'/remeraAzul.png'} texto={'Remera azul'} ></Producto>
                <Producto suma ={funcion} img={'/remeraBlanca.jpg'} texto={'Remera blanca'} ></Producto>
                <Producto suma ={funcion} img={'/remeraVerde.png'} texto={'Remera verde'} ></Producto>
            </div>
        </div> 
    // return <div id="list">
    //     <h2>{titulo}</h2>
    //     <div className="itemlist">
    //     {users.map((usuario, index) => {
    //         return <Producto key={index} data={usuario}/>
    //     })}
    //     </div>
        
    // </div>
        
}

export default Lista