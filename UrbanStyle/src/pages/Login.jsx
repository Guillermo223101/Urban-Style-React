import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import{
    validarCorreoElectronico,
    validarLargoPass
} from '../utils/validaciones';

import './Login.css'

export default function Login() {
    const navegar = useNavigate();

    const [datos, setDatos] = useState({
        correo: '',
        password: ''
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
            correo: validarCorreoElectronico(datos.correo),
            password: validarLargoPass(datos.password)
        };

        setEstados(resultado);

        const esValido = Object.values(resultado).every(Boolean);

        if(!esValido) {
            setMensaje('');
            return;
        }

        if(esValido) {
            const esAdmin =
                datos.correo.trim().toLowerCase() === 'admin@adminstyle.cl' &&
                datos.password === 'Admin123';
            
            if (esAdmin) {
                navegar('/admin');
                return
            }
        }

        setMensaje('Formulaio validado con exito!.')

        
    }

    return(
        <section className="py-5 login-background">
            <div className="container">
                <Link
                    to="/"
                    className="login-volver mb-4"
                >
                    <span className="login-volver-icon">
                        <i className="bi bi-arrow-left me-2"></i>
                    </span>
                    <span>Voler al inicio</span>
                </Link>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5">
                        <div className="bg-white text-dark rounded-4 shadow p-4 p-md-5">
                            <div className="text-center mb-4">
                                <i className="bi bi-person-circle fs-1"></i>
                                <h1 className="fs-3 fw-bold mt-2">
                                    INICIAR SESION
                                </h1>
                                <p className="text-muted small">
                                    Bienvenido a UrbanStyle
                                </p>
                            </div>
                            <form onSubmit={manejarSubmit} noValidate>
                                <div className="mb-3">
                                    <label htmlFor="login-correo" className="form-label fw-bold">Correo electronico</label>
                                    <input 
                                        type="text"
                                        id="login-correo"
                                        name="correo"
                                        autoComplete="email"
                                        value={datos.correo}
                                        onChange={manejarCabio}
                                        placeholder="correo@ejemploo.duoc.cl"
                                        className={`form-control ${
                                            estados.correo === true
                                                ? 'is-valid'
                                                : estados.correo === false
                                                    ? 'is-invalid'
                                                    : ''
                                        }`}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Ingresa un correo electrinico valido
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="login-password" className="form-label fw-bold">Contraseña</label>
                                    <input 
                                        type="password"
                                        id="password"
                                        name="password"
                                        autoComplete="current-password"
                                        value={datos.password}
                                        onChange={manejarCabio}
                                        placeholder="Contraseña"
                                        className={`form-control ${
                                            estados.password === true
                                            ? 'is-valid'
                                            : estados.password === false
                                                ? 'is-invalid'
                                                : ''
                                        }`} 
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        La contraseña debe tener entre 5 a 12 caracteres.
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-dark w-100 py-3 rounded-pill fw-bold"
                                >
                                    INICIAR SESION
                                </button>
                                {mensaje && (
                                    <div
                                        className="alert alert-info mt-3"
                                        role="status"
                                    >
                                        {mensaje}
                                    </div>
                                )}
                                <p className="text-center mt-4 mb-0">
                                    ¿No tienes una cuenta?{' '}
                                    <Link
                                        to="/registro"
                                        className="fw-bold text-dark"
                                    >
                                        Regístrate
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}