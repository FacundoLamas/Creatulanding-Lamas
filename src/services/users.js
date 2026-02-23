
import { empleados } from "../../scss/data/users";
const obtenerUser  = ()=> {
        return new Promise((resolve, reject) => {
            const operador = true
            if(operador){
                resolve({succes:true , data: empleados})
            }
            else{
                reject({succes:false, data:""})
            }
        });
    }

    export {obtenerUser}