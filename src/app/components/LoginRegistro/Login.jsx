import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import './LoginRegistro.css';
import { Link, Redirect } from "react-router-dom";
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            redirect: null
        };
        this.iniciarSesion = this.iniciarSesion.bind(this);
        this.manejador = this.manejador.bind(this);
        this.cargarDatos = this.cargarDatos.bind(this);
    }

    manejador(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    cargarDatos(email) {
        fetch(`/usuarios/cargar_datos/${email}`).then(
            res => {
                res.json().then((data) => {
                    this.props.handleUsuario(data.usuario[0].name);
                });
            }
        )
    }

    iniciarSesion = (e) => {
        e.preventDefault();

        fetch('/usuarios/entrar', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(this.state), // data can be `string` or {object}!
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            res.json();

            if (res.status == 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: `¡Sesión iniciada correctamente!`
                })
                this.props.handleLogged();
                this.cargarDatos(this.state.email);
                this.setState({ redirect: "/opciones" });
            } else {
                Swal.fire(
                    'Datos incorrectos',
                    'Email o constraseña incorrectos',
                    'warning'
                );
            }
        })
            .catch(error => console.error('Error:', error));
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
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
