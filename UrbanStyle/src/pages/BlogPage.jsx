import Blog from "../components/Blog/Blog";
import noticias from '../data/noticia.js'

export default function BlogPage(){
    return(
        <section className="container pt-5">
            <div className="section-heading">
                <p className="section-label">INFORMATE</p>
                <h2>Noticias del mundo del Streetweare</h2>
            </div>
            <Blog />
        </section>
    )
}