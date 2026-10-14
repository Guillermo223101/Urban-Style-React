import { useSearchParams } from 'react-router-dom';

import productos from '../data/productos.js'
import Catalogo from '../components/Catalogo/Catalogo.jsx'


export default function Productos({ onAgregar }){
    //Obtiene los parametros de la URL
    const [buscarParametro] = useSearchParams();
    //Recupera la categoria seleccionada
    const categoria = buscarParametro.get('categoria') ?? 'todas';
    //Convertir el parametro en un arreglo
    const categoriaSeleccionada = 
        categoria === 'todas' ? [] : categoria.split(',');
    //Filtrar los productos
    const filtrados = productos.filter((producto) =>
        categoriaSeleccionada.length === 0 || 
        categoriaSeleccionada.includes(producto.categoria)
    );

    return(
        <section className='container pt-5'>
            <div className='section-heading'>
                <p className='section-label'>EXPLORAR</p>
                <h2>Productos</h2>
            </div>
            <Catalogo onAgregar={onAgregar} lista={filtrados}/>
        </section>
    )
}