import polera1 from '../../assets/Imagenes/Productos/polera1.webp';
import polera2 from '../../assets/Imagenes/Productos/polera2.png';
import polera3 from '../../assets/Imagenes/Productos/polera3.webp';
import polera4 from '../../assets/Imagenes/Productos/polera4.webp';

import productos from "../../data/producto.json";
import "./Catalogo.css";
import ProductoCard from "../ProductoCard/ProductoCard.jsx";

const imagenes = {
    "1": polera1,
    "2": polera2,
    "3": polera3,
    "4": polera4
};
// porque hay const afuera y adentro. 

export default function Catalogo({onAgregar}) {
       return (
        <section id="productos" className="container py-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 gy-5">
                {productos.map((producto) => (
                    <div className="col" key={producto.id}>
                        <ProductoCard producto={{...producto, imagen: imagenes[producto.id]}} onAgregar={onAgregar} />
                    </div>
                ))}
            </div>
        </section>
    )
}