import { Link } from 'react-router-dom';

import './Categorias.css';

import categoria1 from '../../assets/Imagenes/Categorias/categoria1.jpg';
import categoria2 from '../../assets/Imagenes/Categorias/categoria2.jpg';
import categoria3 from '../../assets/Imagenes/Categorias/categoria3.jpg';
import categoria4 from '../../assets/Imagenes/Categorias/categoria4.jpg';

const categorias = [
    {
        id: 1,
        nombre: 'Poleras y Polerones',
        imagen: categoria1,
        categoria: 'poleras,poleron'
    },
    {
        id: 2,
        nombre: 'Pantalones',
        imagen: categoria2,
        categoria: 'pantalon'
    },
    {
        id: 3,
        nombre: 'Zapatillas',
        imagen: categoria3,
        categoria: 'zapatillas'
    },
    {
        id: 4,
        nombre: 'Accesorios',
        imagen: categoria4,
        categoria: 'accesorio'
    }
];

export default function Categorias() {
    return (
        <section id="categoria" className="section-light py-2">
            <div className='container'>
                <div className='section-heading'>
                    <p className='section-label'>EXPLORAR</p>
                    <h2>CATEGORIAS</h2>
                    <p>Encuentra tu estilo en un solo lugar.</p>
                </div>

                <div className='row g-4'>
                    {categorias.map((bloque) => (
                        <div className='col-12 col-sm-6 col-lg-3'key={bloque.id}> 
                            <Link to={`/productos?categoria=${bloque.categoria}`} className='category-card'>
                                <img src={bloque.imagen} alt={bloque.imagen} />
                                <div className='category-overlay'>
                                    <h4>{bloque.nombre}</h4>
                                <span>Ver coleccion <i className="bi bi-arrow-right"></i></span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>        
    )
}
    
    