import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Carrito from './components/Carrito/Carrito.jsx'
import Footer from './components/Footer/Footer.jsx'

import './App.css'

import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'

function cargarCarrito(){
  try {
    const datos = JSON.parse(localStorage.getItem('carritoUrbanStyle') || '[]');
  return Array.isArray(datos) ? datos : [];
  } catch{
  return [];
  }
}

function App() {
  const [carrito, setCarrito] = useState(cargarCarrito);

  useEffect(() => { localStorage.setItem('carritoUrbanStyle', JSON.stringify(carrito)); }, [carrito]);

  const agregarProducto = (nuevoProducto) => {
    setCarrito((actual) => {
      const existe = actual.some(item => item.id === nuevoProducto.id);
      if (existe) {
        return actual.map(item => item.id === nuevoProducto.id ? { ...item, cantidad: item.cantidad + 1 } : item);
      }
      return [...actual, { ...nuevoProducto, cantidad: 1 }];
    });
  };

  const cambiarCantidad = (id, cambio) => {
    setCarrito((actual) => {
        return actual.map(item => item.id === id ? { ...item, cantidad: item.cantidad + cambio} : item)
        .filter(item => item.cantidad > 0);
    });
  };

  const eliminarProducto = (id) => {
    setCarrito((actual) => actual.filter(item => item.id !== id));
  };

  const cantidadCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <>
        <Header cantidadCarrito={cantidadCarrito} />
        <Carrito 
          carrito={carrito}  
          cambiarCantidad={cambiarCantidad}
          eliminarProducto={eliminarProducto}/>
        <main>
          <Routes>
              <Route path='/' element={<Inicio onAgregar={agregarProducto} />} />
              <Route path='/productos' element={<Productos onAgregar={agregarProducto} />} />
              <Route path='/blogPage'/>
          </Routes>
        </main>
        <Footer />
    </> 
  )
}

export default App
