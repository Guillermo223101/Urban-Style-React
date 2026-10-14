import datos from './noticias.json';

const imagenes = import.meta.glob(
    //Vite obtiene las imagenes de esta carpeta
    '../assets/Imagenes/Blog/*.{jpg,jepg,png,webp,avif}',
    {
        eager: true, //hace que los archivos coincidentes se importen
        query: '?url', 
        import: 'default'
    }
);

//Unimos los productos segun su imagen
const blogs = datos.map((b) => {
    const nombreArchivo = b.imagen?.split('/').pop() ?? '';

    const ruta = `../assets/Imagenes/Blog/${nombreArchivo}`;

    return{
        ...b,
        imagen: imagenes[ruta] ?? ''
    };
});

export default blogs;