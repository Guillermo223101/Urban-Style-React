# UrbanStyle | Tienda de moda urbana

**UrbanStyle** es un proyecto académico de desarrollo frontend realizado para la asignatura **Desarrollo FullStack 2 de Duoc UC**. Simula una tienda de ropa urbana, zapatillas y accesorios mediante una aplicación construida con **React y Vite**.

El propósito del proyecto es aplicar los conceptos de componentes reutilizables, props, hooks, enrutamiento, manejo de eventos, formularios, lectura de archivos JSON y pruebas automatizadas con **Jasmine y Karma**.

## Tecnologías utilizadas

- **React 19:** desarrollo de la interfaz mediante componentes y hooks (`useState`, `useEffect`, `useRef`).
- **Vite 8:** entorno de desarrollo y compilación.
- **React Router DOM 7:** navegación entre páginas y rutas dinámicas.
- **Bootstrap 5 y Bootstrap Icons:** estilos responsivos, componentes visuales e iconografía.
- **JavaScript, HTML y CSS:** lógica, estructura y personalización del diseño.
- **JSON:** almacenamiento de los datos iniciales de productos y noticias.
- **localStorage:** persistencia del carrito en el navegador.
- **Jasmine, Karma, Webpack, Babel y React Testing Library:** ejecución de pruebas de componentes y funciones.
- **Istanbul / karma-coverage:** generación del informe de cobertura de las pruebas.

## Funcionalidades implementadas

- **Página de inicio:** carrusel principal, categorías, productos destacados y noticias.
- **Catálogo:** listado de 20 productos cargados desde JSON y filtrado por categoría.
- **Detalle de producto:** ruta dinámica con imagen, descripción, precio y selección de talla cuando corresponde.
- **Carrito:** agregar productos, aumentar o disminuir cantidades, eliminar artículos y calcular el total. Se conserva en `localStorage` bajo la clave `carritoUrbanStyle`.
- **Blog:** visualización de 8 noticias cargadas desde JSON.
- **Registro y login:** formularios con validaciones desarrolladas en JavaScript y retroalimentación visual.
- **Panel de administración demostrativo:** navegación entre inventario, agregar producto y nuevo blog. El inventario muestra los productos registrados; los formularios de gestión todavía son secciones de ejemplo.
- **Pruebas automatizadas:** 6 casos con Jasmine y Karma sobre `ProductoCard` y las funciones de validación.

## Rutas de la aplicación

| Ruta | Descripción |
| --- | --- |
| `/` | Página de inicio. |
| `/productos` | Catálogo completo. |
| `/productos?categoria=zapatillas` | Ejemplo de filtro por categoría. |
| `/productos/:id` | Detalle de un producto. |
| `/blogPage` | Listado de noticias. |
| `/registro` | Formulario de registro. |
| `/login` | Formulario de inicio de sesión. |
| `/admin` | Panel de administración demostrativo. |

## Estructura principal
```text
UrbanStyle/
├── public/                   # Recursos públicos y favicon
├── src/
│   ├── assets/               # Imágenes del catálogo, blog y carrusel
│   ├── components/           # Componentes reutilizables
│   │   ├── Blog/
│   │   ├── Carrito/
│   │   ├── Carrusel/
│   │   ├── Catalogo/
│   │   ├── Categorias/
│   │   ├── Destacados/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Mapa/
│   │   └── ProductoCard/
│   ├── data/
│   │   ├── producto.json    # Datos de los productos
│   │   ├── productos.js     # Asociación de productos con imágenes
│   │   ├── noticias.json   # Datos de las noticias
│   │   └── noticia.js      # Asociación de noticias con imágenes
│   ├── pages/                # Vistas y páginas del sitio
│   ├── test/                 # Pruebas automatizadas
│   │   ├── ProductoCard.spec.jsx
│   │   └── Validaciones.spec.jsx
│   ├── utils/
│   │   └── validaciones.js
│   ├── App.jsx               # Rutas y estado compartido del carrito
│   └── main.jsx              # Punto de entrada de React
├── karma.conf.cjs            # Configuración de Karma
├── package.json
└── vite.config.js
```

## Instalación y ejecución

**Requisitos:** Node.js, npm y un navegador web. Para ejecutar las pruebas automatizadas se requiere Google Chrome.

1. Descarga o clona el repositorio.
2. Abre una terminal en la carpeta que contiene `package.json`.
3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre la dirección local que indique Vite en la terminal (normalmente `http://localhost:5173/`).

### Comandos disponibles

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Permite previsualizar la compilación. |
| `npm run lint` | Ejecuta el analizador de código configurado. |
| `npm test` | Ejecuta las pruebas automatizadas con Jasmine y Karma. |

> El comando `npm test` corresponde a la incorporación posterior de las pruebas. Debe existir en `package.json` como `"test": "karma start karma.conf.cjs"` y deben estar instaladas las dependencias de prueba.

## Pruebas automatizadas: Jasmine y Karma

Las pruebas se encuentran en `src/test/`:

| Archivo | Casos evaluados |
| --- | --- |
| `ProductoCard.spec.jsx` | Muestra el nombre, presenta el botón para agregar al carrito y ejecuta la función `onAgregar` al pulsarlo. |
| `Validaciones.spec.jsx` | Valida el formato del correo electrónico, el largo de la contraseña y el teléfono celular chileno. |

Para ejecutar todas las pruebas:

```bash
npm test
```

**Última ejecución registrada (20-10-2026): 6 pruebas exitosas de 6.**

### Cobertura de código

En esa ejecución, el reporte de Istanbul mostró:

| Métrica | Cobertura |
| --- | ---: |
| Statements (sentencias) | 69,23 % (9/13) |
| Branches (ramas condicionales) | 33,33 % (2/6) |
| Functions (funciones) | 60 % (6/10) |
| Lines (líneas) | 69,23 % (9/13) |

Karma genera el informe HTML en `coverage/html/index.html` si está configurado el reporte `coverage`. Estas cifras corresponden al código instrumentado durante las pruebas; **no representan necesariamente toda la aplicación**.

## Datos y persistencia

Los productos se definen en `src/data/producto.json` y las noticias en `src/data/noticias.json`. Los módulos `productos.js` y `noticia.js` utilizan `import.meta.glob()` para asociar los datos con las imágenes ubicadas en `src/assets/`.

El carrito se conserva localmente en el navegador mediante `localStorage`. Los formularios de acceso y registro demuestran validaciones de interfaz, pero **no crean cuentas reales ni verifican usuarios en un servidor**.

El acceso al administrador también es demostrativo: las credenciales se comprueban en el frontend y la ruta `/admin` no dispone de protección de servidor. No debe utilizarse este mecanismo como autenticación de producción.

## Limitaciones y posibles mejoras

- Completar las operaciones de agregar, editar y eliminar productos y noticias desde el panel administrativo.
- Implementar una búsqueda funcional y paginación en el catálogo.
- Añadir páginas de detalle para las noticias y una ruta de error 404.
- Completar los enlaces informativos pendientes y continuar mejorando el diseño responsivo.
- Incorporar un backend y una base de datos si el proyecto evoluciona más allá de la demostración académica.

## Contexto académico

Proyecto desarrollado con fines de aprendizaje, con énfasis en React, reutilización de componentes, manejo de datos JSON, validaciones y pruebas automatizadas. Las características de comercio electrónico representan una simulación y no una tienda operativa.
