import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
export default class Login extends Component {
    render() {
        return (
            <div className="contenedor-login">
                <form className="form-login">
                    <img src={this.props.imagenes.logo}></img>
                    <p>Inicia sesión para administrar tus productos</p>
                    <input type="text" placeholder="Usuario"></input>
                    <input type="password" placeholder="Contraseña"></input>
                    <Link to="dashboard"><input type="submit" className="boton-azul btn-enviar" value="Iniciar Sesión"></input></Link>
                    <p>Si no tienes cuenta <Link to="crear_cuenta" className="enlace-login">crea una aquí</Link></p>
                </form>
            </div>
        )
    }
}
