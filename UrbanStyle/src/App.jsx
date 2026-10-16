import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Carrito from './components/Carrito/Carrito.jsx'
import Footer from './components/Footer/Footer.jsx'

import './App.css'

import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import BlogPage from './pages/BlogPage.jsx'
import DetalleProducto from './pages/DetalleProductos.jsx'
import Registro from './pages/Registro.jsx'
import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'

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
              <Route path='/blogPage' element={<BlogPage />}/>
              <Route path='/productos/:id' element={<DetalleProducto onAgregar={agregarProducto} />}/>
              <Route path='/registro' element={<Registro />} />
              <Route path='/login' element={<Login />} />
              <Route path='/admin' element={<Admin/>}/>
          </Routes>
        </main>
        <Footer />
    </> 
  )
}

export default App
