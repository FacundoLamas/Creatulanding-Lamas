import Carrito from "./cartwidget"


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
                        <a href="./.">
                            {props.actual}
                        </a>
                    </li>
                    <li>
                        <a href={props.referencia}>
                            {props.otra}
                        </a>
                    </li>
                </ul>
                <Carrito items={props.itemsCarrito}></Carrito>
            </div>
        </nav>
    
};
export default Nav