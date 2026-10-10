import './Header.css';


function Header({cantidadCarrito}) {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark urban-navbar py-3">
            <div className="container">
                <a className="navbar-brand urban-logo" href="index.html">
                    <div className="brand-text">URBAN<span>STYLE</span></div><small>ROPA - CALZADO - ACCESORIOS</small>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuPrincipal">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" href="index.html">Inicio</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="categoria.html" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">Tienda</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="categoria.html">Ropa</a></li>
                                <li><a className="dropdown-item" href="categoria2.html">Pantalones</a></li>
                                <li><a className="dropdown-item" href="categoria.html">Zapatillas</a></li>
                                <li><a className="dropdown-item" href="categoria2.html">Accesorios</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                        <li className="nav-item"><a className="nav-link" href="login.html">Registrarse</a></li>
                    </ul>
                    <div className="d-flex align-items-center gap-4 nav-icons">
                        <button className="icon-button" type="button" aria-label="Buscar productos"><i
                                className="bi bi-search"></i></button>
                        <a href="login.html" className="icon-button" aria-label="Mi cuenta"><i className="bi bi-person"></i></a>
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