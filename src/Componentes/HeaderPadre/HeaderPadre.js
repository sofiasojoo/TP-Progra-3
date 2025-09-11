
import { Link } from "react-router-dom";


function HeaderPadre(){
    let itemsMenu=[{ruta:"/", name:"Home"},{ruta:"/favoritos", name:"Favoritos"}, {ruta:"/populares", name:"Populares"}, {ruta:"/cartelera", name:"Cartel"}]
    return (<nav>
         <h1>Nombre del grupo</h1>
         <ul
            className="main-nav">
            {itemsMenu.map((item)=> <li><Link to = {item.ruta}> {item.name}</Link></li>)}
        </ul>
    </nav>)
}

export default HeaderPadre