import productos from "../../data/productos.js";
import ProductoCard from "../ProductoCard/ProductoCard.jsx";

import "./Catalogo.css";
 
export default function Catalogo({onAgregar, lista = productos}) {
       return (
        <section id="productos" className="container py-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 gy-5">
                {lista.map((producto) => (
                    <div className="col" key={producto.id}>
                        <ProductoCard producto={producto} onAgregar={onAgregar} />
                    </div>
                ))}
            </div>
        </section>
    )
}