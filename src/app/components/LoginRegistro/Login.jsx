import React from 'react'
import './LoginRegistro.css';

import { Link } from "react-router-dom";

export default function Login(props) {
    return (
        <div className="contenedor-login d-flex justify-content-center align-items-center">
            <form className="form-login d-flex flex-column align-items-center">
                <img src={props.imagenes.logo}></img>
                <p>Inicia sesión para administrar tus productos</p>
                <input type="text" placeholder="Usuario"></input>
                <input type="password" placeholder="Contraseña"></input>
                <Link to="dashboard"><input type="submit" className="btn btn-primary" value="Iniciar Sesión"></input></Link>
                <p className="p-3">Si no tienes cuenta <span className="enlace-login"><Link to="crear_cuenta">crea una aquí</Link></span></p>
            </form>
        </div>
    )
}
