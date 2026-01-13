const Nav = ({actual,referencia,otra})=>{
    return <nav>
            <div id="navTitulo">
                <h1>E-Commerce</h1>
            </div>
            <ul id="navLinks">
                <li>
                        <a href="">{actual}</a>
                </li>
                <li>
                    <a href={referencia}>{otra}</a>
                </li>
            </ul>
        </nav>
    
};
export default Nav