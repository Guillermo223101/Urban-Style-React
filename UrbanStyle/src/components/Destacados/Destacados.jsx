import { useRef } from 'react';

import './Destacados.css'
import productos from "../../data/productos.js";
import ProductoCard from '../ProductoCard/ProductoCard.jsx';


export default function Destacados({onAgregar}){
    const carruselRef = useRef(null);

    const destacados = productos
        .filter(producto => producto.destacado === true)
        .slice(0, 8);

    const moverCarrusel = (direccion) => {
        const carrusel = carruselRef.current;
        if (!carrusel) return;

        const tarjeta = carrusel.firstElementChild;

        if (!tarjeta) return;

        const ancho = tarjeta.getBoundingClientRect().width;
        const espacio = 16;

        carrusel.scrollBy({
            left: (ancho + espacio) * direccion,
            behavior: 'smooth'
        });
    };
        
    return (
        <section className="py-5" id="destacados">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className='section-heading'>
                        <p className="section-label">
                            NUESTRA SELECCIÓN
                        </p>
                        <h2>PRODUCTOS DESTACADOS</h2>
                    </div>

                    <div className="d-flex gap-2">
                        <button
                            type="button"
                            className="btn btn-outline-dark"
                            aria-label="Ver productos anteriores"
                            onClick={() => moverCarrusel(-1)}>

                            <i className="bi bi-chevron-left"></i>
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-dark"
                            aria-label="Ver siguientes productos"
                            onClick={() => moverCarrusel(1)}>

                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <div
                    className="destacados-carrusel"
                    ref={carruselRef}
                    tabIndex={0}
                    aria-label="Productos destacados" >

                    {destacados.map(producto => (
                        <div className="destacados-item" key={producto.id}>
                            <ProductoCard producto={producto} onAgregar={onAgregar}/>
                        </div>
                    ))}
                </div>

                {destacados.length === 0 && (
                    <p className="text-muted">
                        Todavía no hay productos destacados.
                    </p>
                )}
            </div>
        </section>
    );
}