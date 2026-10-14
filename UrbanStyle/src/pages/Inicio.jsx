import Carrusel from "../components/Carrusel/Carrusel.jsx";
import Categorias from "../components/Categorias/Categorias.jsx";
import Destacados from "../components/Destacados/Destacados.jsx";
import Mapa from "../components/Mapa/Mapa.jsx";
import Blog from "../components/Blog/Blog.jsx";

export default function Inicio({ onAgregar }) {
    return (
        <>
            <Carrusel />
            <Categorias />
            <Destacados onAgregar={onAgregar}/>
            <section className="py-5 bg-dark-custom text-white">
                <div className="container-xl">
                    <div className="row g-4 align-items-stretch">
                        <div className="col-12 col-md-7">
                            <Blog />
                        </div>
                        <div className="col-12 col-md-5 map">
                            <Mapa />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}