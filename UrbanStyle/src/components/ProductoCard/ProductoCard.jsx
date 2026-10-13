import "./ProductoCard.css";

export default function ProductoCard({ producto, onAgregar }) {

    const formatoPrecio = (valor) => {
        return `$${valor.toLocaleString('es-CL')}`;
    };

    return (
        <div className="card product-card h-100 border-0 shadow-sm">
            <div className="position-relative text-center p-3">
                <img 
                    src={producto.imagen} 
                    className="card-img-top img-fluid" 
                    alt={producto.nombre} />
                <span className="badge bg-light text-dark border mb-1 text-wrap text-start">Retiro en 3 horas</span>
            </div>
            <div className="card-body d-flex flex-column px-3 pt-0">
                <div className="mb-2">
                    <p className="text-success fw-bold" style={{ fontSize: '0.75rem' }}>Llega el lunes RM</p>
                </div>
                <h5 className="product-title mt-1">
                    {producto.nombre}
                </h5>
                <div className="mt-auto pt-2 d-flex justify-content-between align-items-center gap-2">
                    <span className="product-price">
                        {formatoPrecio(producto.precio)}
                    </span>
                    <button 
                        type="button"
                        onClick={() => onAgregar(producto)}
                        title = "Agregar al carrito"
                        aria-label={`Agregar ${producto.nombre} al carrito`}
                        className="btn btn-lg btn-add-cart">
                        <i className="bi bi-plus-circle"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}