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
                        <a href={props.linkactual}>
                            {props.actual}
                        </a>
                    </li>
                    <li>
                        <a href={props.linkotra}>
                            {props.otra}
                        </a>
                    </li>
                </ul>
                { props.carrito ? <div></div> :
                    <Carrito items={props.itemsCarrito} compra ={props.compra}></Carrito>
                }
            </div>
        </nav>
    
};
export default Nav