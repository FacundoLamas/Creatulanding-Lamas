import Carrito from "./cartwidget"


const Nav = ({actual,referencia,otra})=>{
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
                            {actual}
                        </a>
                    </li>
                    <li>
                        <a href={referencia}>
                            {otra}
                        </a>
                    </li>
                </ul>
                <Carrito></Carrito>
            </div>
        </nav>
    
};
export default Nav