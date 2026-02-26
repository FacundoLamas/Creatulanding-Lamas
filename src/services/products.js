
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

    export {obtenerProductos}