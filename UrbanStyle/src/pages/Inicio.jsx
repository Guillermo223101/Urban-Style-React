import Carrusel from "../components/Carrusel/Carrusel.jsx";
import Catalogo from "../components/Catalogo/Catalogo.jsx";
import Categorias from "../components/Categorias/Categorias.jsx";

export default function Inicio({ onAgregar }) {
    return (
        <>
            <Carrusel />
            <Categorias />
            <Catalogo onAgregar={onAgregar} />
        </>
    );
}