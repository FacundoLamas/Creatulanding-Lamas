
import { productos } from "../../scss/data/products";
const obtenerProductos  = ()=> {
        return new Promise((resolve, reject) => {
            const operador = true
            if(operador){
                resolve({succes:true , data: productos})
            }
            else{
                reject({succes:false, data:""})
            }
        });
    }
const obtenerProductoSimple = (id) =>{
    return new Promise((resolve,reject) =>{
        resolve({succes:true,data:productos[id]})
    })
}

    export {obtenerProductos,obtenerProductoSimple}