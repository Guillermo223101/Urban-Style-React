import blog1 from '../../assets/Imagenes/Blog/blog1.jpg'
import blog2 from '../../assets/Imagenes/Blog/blog2.jpg'

import './Blog.css'

const noticias = [
    {
        id: 1,
        nombre: 'TENDENCIAS',
        imagen: blog1,
        titulo: 'Tendencias streetwear que marcarán la temporada',
        descripcion: 'Descubre los estilos y colores de esta temporada.'
    },
    {
        id: 2,
        nombre: 'GUIA',
        imagen: blog2,
        titulo: 'Guía de tallas y calce perfecto para comprar ropa online',
        descripcion: 'Evita errores al comprar. Te ayudamos a elegir la talla ideal según tu tipo de cuerpo y prenda.'
    },
]

export default function Blog(){
    return(
        <section id="blog-registro" className="py-5 bg-dark-custom text-white">
            <div className="container-xl">
                <div className="row g-4 align-items-stretch">
                    <div className="col-12 col-md-7">
                        <div className="section-heading mb-4">
                            <h2 className="fw-bold m-0">BLOG / NOTICIAS</h2>
                            <p className="text-secondary small">Tips, tendencias y todo lo que necesitas saber del mundo
                                streetwear.</p>
                        </div>
                        <div className="row g-3">
                            {noticias.map((bloque) => (
                                <div className="col-6" key={bloque.id}>
                                    <article className="blog-card h-100">
                                            <div className="blog-img">
                                                <img src={bloque.imagen} alt={bloque.nombre}/>
                                                <span className="badge-category bg-primary-custom">{bloque.nombre}</span>
                                            </div>
                                        
                                            <div className="blog-content">
                                                <h3>{bloque.titulo}</h3>
                                                <p>{bloque.descripcion}</p>
                                                <a href="#blog" className="leer-mas mt-auto">Leer más <i
                                                        className="bi bi-arrow-right"></i></a>
                                            </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-md-5 map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.262024763673!2d-70.5813727243029!3d-33.59850527333112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d7037854df81%3A0x893f58a1479b8f82!2sDuoc%20UC%3A%20Sede%20Puente%20Alto!5e0!3m2!1ses-419!2scl!4v1789952201692!5m2!1ses-419!2scl"
                            width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"
                            referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}