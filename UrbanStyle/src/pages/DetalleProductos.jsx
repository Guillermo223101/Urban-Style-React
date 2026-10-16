import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import productos from "../data/productos";

export default function DetalleProductos({onAgregar}){
    const {id} = useParams();

    const producto = productos.find(p => String(p.id) === id);

    const [tallaSeleccionada, setTallaSeleccionada] = useState('');

    useEffect(() => {
        setTallaSeleccionada('');
    }, [id]);

    if(!producto){
        return(
            <section className="container py-5"> 
                <h2> Producto no encontrado </h2>
                <p>El producto solicitado no existe</p>
            </section>
        )
    }
    
    const agregarAlCarrito = () => {
        const tieneTallas = producto.tallas?.length > 0;

        if(tieneTallas && !tallaSeleccionada) return;

        const talla = tieneTallas ? tallaSeleccionada : null;

        onAgregar({
            ...producto,
            productoId: producto.id,
            talla,
            id: talla ? `${producto.id}-${talla}` : producto.id
        });
    };
    
    return(
        <section className="container py-5">
            <div className="row g-4 align-items-start">
                <div className="col-12 col-lg-7">
                    <div className="bg-light rounded-3 p-4 text-center">
                        <img 
                            src={producto.imagen} 
                            alt={producto.nombre}
                            className="img-fluid"
                            style={{
                                maxHeight: '520px',
                                objectFit: 'contain'
                            }} />
                    </div>
                </div>
                <div className="col-12 col-lg-5">
                    <p className="text-uppercase text-secondary small">
                        {producto.categoria}
                    </p>
                    <h1 className="fw-bold">{producto.nombre}</h1>
                    <p className="fs-3 fw-bold">${producto.precio.toLocaleString('es-CL')}</p>
                    {producto.tallas?.length > 0 ? (
                        <div className="my-4">
                            <h5>Seleccionar talla</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {producto.tallas.map((talla) => (
                                    <button 
                                        key={talla} 
                                        type="button" 
                                        className={
                                            tallaSeleccionada === talla
                                                ? 'btn btn-dark'
                                                : 'btn btn-outline-dark'
                                        }
                                        aria-pressed={tallaSeleccionada === talla}
                                        onClick={() => setTallaSeleccionada(talla)}>
                                            {talla}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ):(
                        <p className="my-4">Talla unica</p>

                    )}
                    <div className="my-4">
                        <h5>Descripcion</h5>
                        <p className="text-secondary">
                            {producto.descripcion || 'Descripcion proximamente disponible'}
                        </p>
                    </div>
                    <button
                        type="button"
                        className="btn btn-dark btn-lg rounded-pill w-100 py-3"
                        disabled={
                            producto.tallas?.length > 0 && !tallaSeleccionada
                        }
                        onClick={agregarAlCarrito}
                    >
                        <i className="bi bi-bag-plus me-2"></i>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </section>
    )
}