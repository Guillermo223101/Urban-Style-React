import productos from "../../data/productos.js";
import ProductoCard from "../ProductoCard/ProductoCard.jsx";

import "./Catalogo.css";
// porque hay const afuera y adentro. 
export default function Catalogo({onAgregar}) {
       return (
        <section id="productos" className="container py-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 gy-5">
                {productos.map((producto) => (
                    <div className="col" key={producto.id}>
                        <ProductoCard producto={producto} onAgregar={onAgregar} />
                    </div>
                ))}
            </div>
        </section>
    )
}