import blogs from "../../data/noticia.js"

import './Blog.css'

export default function Blog({ soloInicio = false}){
    const visible = soloInicio
        ? blogs.filter(blog => blog.inicio === true)
        : blogs;

    
    return(
        <section id="blog-registro">
            <div className="row g-3">
                {visible.map((bloque) => (
                    <div className={
                            soloInicio
                                ? "col-12 col-sm-6"
                                : "col-12 col-sm-6 col-lg-4"} key={bloque.id}>
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