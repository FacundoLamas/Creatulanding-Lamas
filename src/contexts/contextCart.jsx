import {  createContext, useContext } from 'react';
import { useEffect, useState } from 'react'
const contextCartw = createContext();

export function CarritoProvider({children}){
    const [compras, setCompras]= useState([])  //Array de compras
    function comprar ( objeto ){
            setCompras([...compras,objeto]);
        }
        function eliminarcompra (objeto,index){
            setCompras(compras.filter((objeto,indice) => index !== indice));
        }
        return(
            <contextCartw.Provider value={{compras,setCompras,comprar,eliminarcompra}}>
                {children}
            </contextCartw.Provider>
        )
}
    



export const useCarrito= () => useContext(contextCartw);