import blog from "../../data/noticia.js"

import './Blog.css'

export default function Blog(){
    const enInicio = blog
        .filter(producto => producto.inicio === true)
        .slice(0, 2);


    return(
        <section id="blog-registro">
            <div className="section-heading mb-4">
                <h2 className="fw-bold m-0">BLOG / NOTICIAS / UBICACION</h2>
                <p className="text-secondary small">Tips, tendencias y todo lo que necesitas saber del mundo
                    streetwear.</p>
            </div>
            <div className="row g-3">
                {enInicio.map((bloque) => (
                    <div className="col-6" key={bloque.id}>
                        <article className="blog-card h-100">
                                <div className="blog-img">
                                    <img src={bloque.imagen} alt={bloque.nombre}/>
                                    <span className="badge-category bg-primary-custom">{bloque.nombre}</span>
                                </div>
                            
                                <div className="blog-content">
                                    <h3>{bloque.titulo}</h3>
                                    <p>{bloque.descripcion}</p>
                                    <a href="#blog" className="leer-mas mt-auto">
                                        Leer más
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    )
}