import datos from './producto.json';

const imagenes = import.meta.glob(
    //Vite obtiene las imagenes de esta carpeta
    '../assets/Imagenes/Productos/*.{jpg,jepg,png,webp,avif}',
    {
        eager: true, //hace que los archivos coincidentes se importen
        query: '?url', 
        import: 'default'
    }
);

//Unimos los productos segun su imagen
const productos = datos.map((producto) => {
    const nombreArchivo = producto.imagen?.split('/').pop() ?? '';

    const ruta = `../assets/Imagenes/Productos/${nombreArchivo}`;

    return{
        ...producto,
        imagen: imagenes[ruta] ?? ''
    };
});

export default productos;