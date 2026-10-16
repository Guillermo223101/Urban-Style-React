import Blog from "../components/Blog/Blog";

export default function BlogPage(){
    return(
        <section className="container section-light py-4">
            <div className="section-heading">
                <p className="section-label">INFORMATE</p>
                <h2>Noticias del mundo del Streetweare</h2>
            </div>
            <div className="text-white">
                <Blog />
            </div>
        </section>
    )
}