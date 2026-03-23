import { use, useContext } from "react";
import Carrito from "./cartwidget"
import { NavLink } from "react-router-dom";


const Nav = (props)=>{
    
    


    return <nav>
            <div id="nav">
                <div id="navImg">
                    <img src="/Logo.jpg" alt=""/>
                </div>
                <div id="navTitulo">
                    <h1 >
                        E-Commerce
                    </h1>
                </div>
                <ul id="navLinks">
                    <li>
                        <NavLink to={props.linkactual}>{props.actual}</NavLink>
                    </li>
                    <li>
                        <NavLink to={props.linkotra}>{props.otra}</NavLink>
                    </li>
                </ul>
                { props.carrito ? <div></div> :
                    <Carrito ></Carrito>
                }
            </div>
        </nav>
    
};
export default Nav