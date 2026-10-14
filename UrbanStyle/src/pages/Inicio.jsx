import Blog from "../components/Blog/Blog.jsx";
import Carrusel from "../components/Carrusel/Carrusel.jsx";
import Categorias from "../components/Categorias/Categorias.jsx";
import Destacados from "../components/Destacados/Destacados.jsx";

export default function Inicio({ onAgregar }) {
    return (
        <>
            <Carrusel />
            <Categorias />
            <Destacados onAgregar={onAgregar}/>
            <Blog />
        </>
    );
}