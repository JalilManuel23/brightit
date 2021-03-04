import React, { Component } from 'react'
import axios from 'axios';

import './LoginRegistro.css';

import { Link } from "react-router-dom";
import history from '../../history';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.iniciarSesion = this.iniciarSesion.bind(this);
        this.manejador = this.manejador.bind(this);
    }

    manejador(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    iniciarSesion = (e) => {
        e.preventDefault();
       
        fetch('/usuarios/entrar', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(this.state), // data can be `string` or {object}!
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

render() {
    return (
        <div className="contenedor-login d-flex justify-content-center align-items-center">
            <form className="form-login d-flex flex-column align-items-center" method="POST" onSubmit={this.iniciarSesion}>
                <img src={this.props.imagenes.logo}></img>
                <p>Inicia sesión para administrar tus productos</p>
                <input type="email" placeholder="Email" name="email" onChange={this.manejador}></input>
                <input type="password" placeholder="Contraseña" name="password" onChange={this.manejador}></input>
                <input type="submit" className="btn btn-primary" value="Iniciar Sesión"></input>
                <p className="p-3">Si no tienes cuenta <span className="enlace-login"><Link to="crear_cuenta">crea una aquí</Link></span></p>
            </form>
        </div>
    )
}
}
