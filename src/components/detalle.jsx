import { data, useParams } from "react-router-dom"
import Nav from "./navbar"
import { obtenerProductoSimple } from "../services/products";
import Producto from "./productcard"
import { useEffect, useState } from "react";
const detalle = () => {
    const {id} = useParams();
    const numericId = parseInt(id, 10);
    const [product, setProduct] = useState({})
    useEffect(() =>{
        obtenerProductoSimple(numericId)
            .then((respuesta) =>{
                setProduct(respuesta.data);
                console.log(respuesta)
                console.log(numericId)
            })
    
        },[])



    return<div id="detalles">
        <Nav actual={"Remeras"} linkactual={"/"} otra={"Camperas"} linkotra={"/camperas"} carrito="a" />
        <div id="detallesdiv">
            <div id="detallesimg">
                <img src={product.img} alt="" />
            </div>
            <div id="detallestexto">
                <h1>{product.producto}</h1>
                <p>{product.descripcion}</p>
            </div>
            
        </div>
    </div>
}

export default detalle