import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
export default class CrearCuenta extends Component {
    render() {
        return (
            <div className="contenedor-login">
                <form className="form-login">
                    <img src={this.props.imagenes.logo}></img>
                    <p>Ingresa tus datos para crear una cuenta</p>
                    <input type="text" placeholder="Usuario"></input>
                    <input type="password" placeholder="Contraseña"></input>
                    <input type="password" placeholder="Confirmar contraseña"></input>
                    <input type="submit" className="boton-azul btn-enviar" value="Crear Cuenta"></input>
                </form>
            </div>
        )
    }
}