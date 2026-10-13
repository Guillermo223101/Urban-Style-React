import './Carrito.css';

function Carrito({carrito, cambiarCantidad, eliminarProducto}) {
    // CALCULAR TOTAL
    const total = carrito.reduce(
        (acumulado, producto) =>
            acumulado + producto.precio * producto.cantidad,
        0
    );

    // FORMATO DE PRECIOS CHILENOS
    const formatoPrecio = (valor) => {
        return `$${valor.toLocaleString('es-CL')}`;
    };

    return(
        <div className="offcanvas offcanvas-end urban-cart" tabindex={-1} id="carritoOffcanvas" aria-labelledby="carritoOffcanvasLabel">
        <div className="offcanvas-header bg-black text-white">
            <h5 className="offcanvas-title fw-bold" id="carritoOffcanvasLabel"><i className="bi bi-cart3 me-2"></i>Tu Carrito
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Cerrar"></button>
        </div>
        {/* CUERPO */}
        <div className="offcanvas-body d-flex flex-column">
            <div id="cart-items-container" className="flex-grow-1 overflow-auto">
                {carrito.length === 0 ? (
                    <p className="text-center text-muted mt-5">Tu carrito está vacío.</p>
                ) : (carrito.map(producto =>(
                    <div key={producto.id} className="d-flex align-items-center mb-3 border-bottom pb-3">
                        {producto.imagen ? (
                            <img src={producto.imagen} alt={producto.nombre} className="urban-cart-item-img me-3 border"/>
                        ) : (
                            <div className="urban-cart-item-img me-3 border">
                                <i className="bi bi-bag"></i>
                            </div>
                        )}
                        {/* INFORMACIÓN */}
                        <div className="flex-grow-1">
                            <h6 className="mb-1 fw-bold">{producto.nombre}</h6>
                            <span className="text-muted small">{formatoPrecio(producto.precio)}</span>
                            {/* CANTIDADES */}
                            <div className="d-flex align-items-center mt-2">
                                <button type="button" className="btn btn-sm btn-outline-dark" 
                                        onClick={() => cambiarCantidad(producto.id, -1)} aria-label="Disminuir cantidad">-</button>
                                <span className="mx-3 fw-bold">{producto.cantidad}</span>
                                <button type="button" className="btn btn-sm btn-outline-dark" 
                                        onClick={() => cambiarCantidad(producto.id, 1)} aria-label="Aumentar cantidad">+</button>
                            </div>
                        </div>
                        {/* SUBTOTAL Y ELIMINAR */}
                        <div className="d-flex flex-column align-items-end ms-2">
                            <span className="fw-bold mb-3">{formatoPrecio(producto.precio * producto.cantidad)}</span>
                            <button type="button" className="btn btn-sm btn-danger" title="Eliminar producto" 
                                aria-label="Eliminar ${producto.nombre} del carrito"
                                onClick={() => eliminarProducto(producto.id)}>
                                    <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                )))}                
            </div>
            <div className="border-top pt-3 mt-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fw-bold fs-5">TOTAL:</span>
                    <span className="fw-bold fs-5">{formatoPrecio(total)}</span>
                </div>
                <button className="btn btn-dark w-100 fw-bold py-2" id="btn-checkout">Ir al Pago</button>
            </div>
        </div>
    </div>
    )
}

export default Carrito;