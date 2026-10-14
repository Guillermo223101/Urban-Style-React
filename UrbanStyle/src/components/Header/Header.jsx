import { Link } from 'react-router-dom';

import './Header.css';

function Header({cantidadCarrito}) {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark urban-navbar py-3">
            <div className="container">
                <Link className="navbar-brand urban-logo" to='/'>
                    <div className="brand-text">URBAN<span>STYLE</span></div><small>ROPA - CALZADO - ACCESORIOS</small>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuPrincipal">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" to='/'>Inicio</Link></li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">Tienda</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/productos'>Ver todo</Link></li>
                                <li><Link className="dropdown-item" to='/productos?categoria=poleras'>Poleras</Link></li>
                                <li><Link className="dropdown-item" to='/productos?categoria=poleron'>Polerones</Link></li>
                                <li><Link className="dropdown-item" to='/productos?categoria=pantalon'>Pantalones</Link></li>
                                <li><Link className="dropdown-item" to='/productos?categoria=zapatillas'>Zapatillas</Link></li>
                                <li><Link className="dropdown-item" to='/productos?categoria=accesorio'>Accesorios</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                        <li className="nav-item"><a className="nav-link" href="login.html">Registrarse</a></li>
                    </ul>
                    <div className="d-flex align-items-center gap-4 nav-icons">
                        <button className="icon-button" type="button" aria-label="Buscar productos"><i
                                className="bi bi-search"></i></button>
                        <a href="#" className="icon-button" aria-label="Mi cuenta"><i className="bi bi-person"></i></a>
                        <button className="icon-button cart-button" type="button" aria-label="Carrito de compras"
                            data-bs-toggle="offcanvas" data-bs-target="#carritoOffcanvas">
                            <i className="bi bi-cart2"></i>
                            <span className="cart-counter" id="cart-badge">{cantidadCarrito}</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;