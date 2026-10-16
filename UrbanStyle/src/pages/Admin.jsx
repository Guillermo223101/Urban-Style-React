import { useState } from "react";
import { Link } from "react-router-dom";

import productos from '../data/productos.js'
import './Admin.css'

export default function Admin(){
    const [seccion, setSeccion] = useState('inventario');

    return(
        <div className="container-fluid">
            <div className="row g-0 admin-layout">
                <aside className="col-12 col-md-3 col-lg-2 admin-sidebar p-3">
                    <h1 className="fw-bold text-center mt-4">
                        URBANSTYLE
                    </h1>
                    <p className="text-warning text-center  mb-4">Panel de Administracion</p>
                    <hr />
                    <div className="d-flex flex-column gap-2">
                        <button
                            type="button"
                            className={`btn text-start botones ${
                                seccion === 'inventario'
                                    ? 'btn-warning'
                                    : 'btn-dark'
                            }`}
                            onClick={() => setSeccion('inventario')}
                        >
                            <i class="bi bi-box-seam me-2"></i>
                            Inventario
                        </button>
                        <button
                            type="button"
                            className={`btn text-start botones ${
                                seccion === 'agregar'
                                    ? 'btn-warning'
                                    : 'btn-dark'
                            }`}
                            onClick={() => setSeccion('agregar')}
                        >
                            <i class="bi bi-plus-circle me-2"></i>
                            Agregar producto
                        </button>
                        <button
                            type="button"
                            className={`btn text-start botones ${
                                seccion === 'blog'
                                    ? 'btn-warning'
                                    : 'btn-dark'
                            }`}
                            onClick={() => setSeccion('blog')}
                        >
                            <i className="bi bi-journal-text me-2"></i>
                            Nuevo blog
                        </button>
                    </div>
                    <hr className="mt-4"/>
                    <Link to='/' className="btn btn-outline-light w-100 botones">
                        <i className="bi bi-arrow-left me-2"></i>
                        Volver a la tienda
                    </Link>
                </aside>
            
                <div className="col-12 col-md-9 col-lg-10 admin-content p-4">
                    {seccion === 'inventario' && (
                        <>
                            <h1 className="fw-bold mb-4">
                                Gestion de inventario
                            </h1>
                            <div className="card shadow-sm border-0">
                                <div className="card-body">
                                    <h5>
                                        Productos registrados: {productos.length}
                                    </h5>
                                    <div className="table-responsive">
                                        <table className="table table-hover align-middle">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Imagen</th>
                                                    <th>Producto</th>
                                                    <th>Categoria</th>
                                                    <th>Precio</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {productos.map((producto) =>(
                                                    <tr key={producto.id}>
                                                        <td>{producto.id}</td>
                                                        <td>
                                                            <img src={producto.imagen} alt={producto.nombre} width="50" />
                                                        </td>
                                                        <td>{producto.nombre}</td>
                                                        <td>{producto.categoria}</td>
                                                        <td>${producto.precio.toLocaleString('es-CL')}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {seccion === 'agregar' &&(
                        <>
                            <h1>Agregar producto</h1>
                            <p>Aquí construiremos el formulario de productos.</p>
                        </>
                    )}
                    {seccion === 'blog' &&(
                        <>
                            <h1>Nuevo blog</h1>
                            <p>Aquí construiremos el formulario de noticias.</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

