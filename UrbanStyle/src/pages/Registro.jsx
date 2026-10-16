import { Link } from "react-router-dom";
import { useState } from "react";

import{
    validarLargo,
    validarCorreoElectronico,
    validarLargoPass,
    validarIgualdad,
    validarDireccion,
    validarTelefono,
    validarSelect
} from '../utils/validaciones'

import './Registro.css';

export default function Registro(){
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        password2: '',
        region: '',
        comuna: '',
        direccion: '',
        telefono: '',
    });

    const [estados, setEstados] = useState({});
    
    const [mensaje, setMensaje] = useState('');

    const manejarCabio = (event) => {
        const {name, value} = event.target;

        setDatos((anterior) => ({
            ...anterior,
            [name]: value
        }));

        setEstados((anterior) => ({
            ...anterior,
            [name]: undefined
        }));

        setMensaje('');
    };

    const manejarSubmit = (event) => {
        event.preventDefault();

        const resultado = {
            nombre: validarLargo(datos.nombre),
            apellido: validarLargo(datos.apellido),
            correo: validarCorreoElectronico(datos.correo),
            password: validarLargoPass(datos.password),
            password2: validarIgualdad(datos.password, datos.password2),
            region: validarSelect(datos.region),
            comuna: validarSelect(datos.comuna),
            direccion: validarDireccion(datos.direccion),
            telefono: validarTelefono(datos.telefono)
        };

        setEstados(resultado);

        const esValido = Object.values(resultado).every(Boolean);

        if(!esValido) {
            setMensaje('');
            return;
        }

        setMensaje('Formulaio validado con exito!.')
    }

    return(
        <section className="py-5 registro-background">
            <div className="container">
                <Link
                    to="/"
                    className="registro-volver mb-4"
                >
                    <span className="registro-volver-icon">
                        <i className="bi bi-arrow-left me-2"></i>
                    </span>
                    <span>Voler al inicio</span>
                </Link>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="form-card bg-white text-dark p-4 p-md-5 rounded-4 shadow">
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-truck fs-2 me-3"></i>
                                <div>
                                    <h3 className="fw-bold mb-0 fs-5">REGISTRO</h3>
                                    <span className="text-muted small">Datos personales y dirección de envío</span>
                                </div>
                            </div>
                            <p className="text-muted small mb-4">Para garantizar una entrega correcta, completa tu dirección
                                y selecciona tu región y comuna.
                            </p>
                            <div className="row g-4">
                                <div className="col-md-8">
                                    <form 
                                        id="form-registro" 
                                        onSubmit={manejarSubmit}
                                        noValidate>
                                        <div className="row g-3 mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="nombre" className="form-label fw-bold small">Nombre *</label>
                                                <input 
                                                    type="text" 
                                                    className={`form-control ${
                                                        estados.nombre === true
                                                        ? 'is-valid'
                                                        : estados.nombre === false
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`} 
                                                    id="nombre" 
                                                    required 
                                                    name="nombre"
                                                    value={datos.nombre}
                                                    onChange={manejarCabio}
                                                />
                                                <div className="invalid-feedback">
                                                    El nombre debe tener al menos 3 caracteres.
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="apellido" className="form-label fw-bold small">Apellidos *</label>
                                                <input 
                                                    type="text" 
                                                    className={`form-control ${
                                                        estados.apellido === true
                                                        ? 'is-valid'
                                                        : estados.apellido === false
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`} 
                                                    id="apellido" 
                                                    required 
                                                    name="apellido"
                                                    value={datos.apellido}
                                                    onChange={manejarCabio}
                                                />
                                                <div className="invalid-feedback">
                                                    El apellido debe tener al menos 3 caracteres.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label fw-bold small">Correo *</label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light border-end-0"><i
                                                        className="bi bi-envelope"></i></span>
                                                <input 
                                                    type="email"
                                                    className={`form-control border-start-0 ps-0 ${
                                                        estados.correo === true
                                                        ? 'is-valid'
                                                        : estados.correo === false
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    id="email"
                                                    required 
                                                    name="correo"
                                                    value={datos.correo}
                                                    onChange={manejarCabio}
                                                />
                                                <div className="invalid-feedback">
                                                    El correo debe tener @ y .
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row g-3 mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="password" className="form-label">Contraseña *</label>
                                                <input 
                                                    type="password" 
                                                    className={`form-control ${
                                                        estados.password === true
                                                        ? 'is-valid'
                                                        : estados.password === false
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`} 
                                                    id="password" 
                                                    required 
                                                    name="password"
                                                    value={datos.password}
                                                    onChange={manejarCabio}
                                                />
                                                <div className="invalid-feedback">
                                                    La contraseña debe tener entre 5 a 12 caracteres.
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="password2" className="form-label">Repita la Contraseña *</label>
                                                <input 
                                                    type="password" 
                                                    className={`form-control ${
                                                        estados.password2 === true
                                                        ? 'is-valid'
                                                        : estados.password2 === false
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`} 
                                                    id="password2" 
                                                    required 
                                                    name="password2"
                                                    value={datos.password2}
                                                    onChange={manejarCabio}
                                                />
                                                <div className="invalid-feedback">
                                                    Las contraseñas deben ser iguales
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row g-3 mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="region" className="form-label fw-bold small">Región *</label>
                                                <select 
                                                    id="region" 
                                                    className={`form-select ${
                                                        estados.region === true
                                                        ? 'is-valid'
                                                        : estados.region === false
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`} 
                                                    required 
                                                    name="region"
                                                    value={datos.region}
                                                    onChange={manejarCabio}
                                                >
                                                    <option value="" disabled>Selecciona una región</option>
                                                    <option value="rm">Región Metropolitana</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="comuna" className="form-label fw-bold small">Comuna *</label>
                                                <select 
                                                    id="comuna" 
                                                    className={`form-select ${
                                                        estados.comuna === true
                                                        ? 'is-valid'
                                                        : estados.comuna === false
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}  
                                                    required 
                                                    name="comuna"
                                                    value={datos.comuna}
                                                    onChange={manejarCabio}
                                                >
                                                    <option value="" disabled>Selecciona una comuna</option>
                                                    <option value="pa">Puente Alto</option>
                                                    <option value="lf">La Florida</option>
                                                    <option value="lp">La Pintana</option>
                                                    <option value="sb">San Bernardo</option>
                                                    <option value="pi">Pirque</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row g-3 mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="direccion" className="form-label fw-bold small">Dirección *</label>
                                                <input 
                                                    type="text" 
                                                    id="direccion" 
                                                    className={`form-control ${
                                                        estados.direccion === true
                                                        ? 'is-valid'
                                                        : estados.direccion === false
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    placeholder="Ej: Av. Principal 123, Depto. 4B" 
                                                    required 
                                                    name="direccion"
                                                    value={datos.direccion}
                                                    onChange={manejarCabio}
                                                />
                                                <div className="invalid-feedback">
                                                    La direccion debe tener mas de 8 caracteres
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="phone" className="form-label fw-bold small">Telefono *</label>
                                                <input 
                                                    type="text" 
                                                    id="phone" 
                                                    className={`form-control ${
                                                        estados.telefono === true
                                                        ? 'is-valid'
                                                        : estados.telefono === false
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    placeholder="+569...." 
                                                    required 
                                                    name="telefono"
                                                    value={datos.telefono}
                                                    onChange={manejarCabio}
                                                />
                                                <div className="invalid-feedback">
                                                    El telefono debe tener el prefijo +569 y 8 numeros mas
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">REGISTRARSE</button>
                                        {mensaje && (
                                            <div className="alert alert-succes mt-3" role="status">
                                                {mensaje}
                                            </div>
                                        )}
                                    </form>
                                </div>

                                <div className="col-md-4 d-flex flex-column gap-3">
                                    <div
                                        className="info-box bg-light-blue p-4 rounded-4 text-center h-50 d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-map fs-1 text-primary-custom"></i>
                                    </div>
                                    <div
                                        className="info-box bg-light-blue p-4 rounded-4 text-center h-50 d-flex flex-column justify-content-center align-items-center">
                                        <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                                            <i className="bi bi-check-circle-fill text-dark fs-5"></i>
                                            <span className="fw-bold text-start lh-1" style={{fontSize: '0.85rem'}}>Envíos a
                                                todo Chile</span>
                                        </div>
                                        <i className="bi bi-buildings fs-1 text-muted opacity-25 mt-1"></i>
                                        <p className="text-muted mt-2 mb-0" style={{fontSize: '0.65rem', lineHeight: 1.2}}>
                                            Tu dirección será validada para asegurar la correcta entrega en tu zona.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}