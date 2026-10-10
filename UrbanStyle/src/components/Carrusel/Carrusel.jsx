import './Carrusel.css';

function Carrusel() {
    return (
        <section id="inicio" className="mb-5">
            <div id="caruselPrincipal" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#caruselPrincipal" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#caruselPrincipal" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#caruselPrincipal" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="hero-slide hero-slide-1">
                            <div className="container">
                                <div className="hero-content">
                                    <p className="hero-overline">NUEVA COLECCION</p>
                                    <h1>URBAN<span> STYLE</span></h1>
                                    <p className="hero-description">Ropa y zapatillas para quienes viven la ciudad a su
                                        manera</p>
                                    <div className="hero-button">
                                        <a href="categoria.html" className="btn btn-light btn-lg">VER ROPA<i
                                                className="bi bi-arrow-right"></i></a>
                                        <a href="categoria.html" className="btn btn-outline-light btn-lg">VER
                                            CALZADO<i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="hero-slide hero-slide-2">
                            <div className="container">
                                <div className="hero-content">
                                    <p className="hero-overline">STREETWEAR 2026 - 2027</p>
                                    <h2>DEFINE<span> TU ESTILO</span></h2>
                                    <p className="hero-description">Diseños unicos para destacar en cualquier lugar</p>
                                    <div>
                                        <a href="categoria.html" className="btn btn-light btn-lg">EXPLORAR COLECCION<i
                                                className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="hero-slide hero-slide-3">
                            <div className="container">
                                <div className="hero-content">
                                    <p className="hero-overline">CALZADO EXCLUSIVO</p>
                                    <h2>TU LO ERES TODO</h2>
                                    <p className="hero-description">Zapatillas seleccionadas para tu outfit</p>
                                    <div>
                                        <a href="categoria.html" className="btn btn-light btn-lg">VER CALZADO <i
                                                className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#caruselPrincipal"
                    data-bs-slide="prev" aria-label="Anterior">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#caruselPrincipal"
                    data-bs-slide="next" aria-label="Siguiente">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </section>
    )
}

export default Carrusel;