import React, { Component } from 'react'
import './Contacto.css';
import imagenes from '../../../assets/imagenes';
import Swal from 'sweetalert2'

export default class Contacto extends Component {
    constructor() {
        super();
        this.state = {
            nombre: '',
            email: '',
            mensaje: ''
        }
        this.manejador = this.manejador.bind(this);
        this.enviarEmail = this.enviarEmail.bind(this);
    }

    manejador(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    enviarEmail = (e) => {
        e.preventDefault();
        fetch('/send_email', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(this.state), // data can be `string` or {object}!
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json().then((data) => {
                console.log(data);
            });
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
                    title: `¡Mensaje enviado correctamente!`
                })
            } else {
                Swal.fire(
                    'Ha ocurrido un problema',
                    'El mensaje no ha sido enviado',
                    'warning'
                );
            }
        }).catch(error => console.error('Error:', error));

        this.setState({
            nombre: '',
            email: '',
            mensaje: ''
        });
    }

    render() {
        return (
            <section className="contacto">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <h2 className="titulo texto-azul">Contacto</h2>
                    <div className="info-formulario d-flex">
                        <div className="info-bubbles d-flex flex-column">
                            <div className="info">
                                <h3>Información de contacto</h3>
                                <p>¿Tienes alguna duda? Solo escribenos en nuestras
                                    redes o en nuestro formulario.</p>
                                <p>6181846889</p>
                                <p>brightit@gmail.com</p>
                            </div>
                            <div className="bubbles">
                                <img src={imagenes.bubbles}></img>
                                <div>

                                </div>
                            </div>
                        </div>
                        <form className="form d-flex flex-column align-items-center" method="POST" onSubmit={this.enviarEmail}>
                            <div>
                                <label>Envianos un mensaje</label>
                                <input type="text" placeholder="Nombre" name="nombre" onChange={ this.manejador }></input>
                                <input type="email" placeholder="Email" name="email" onChange={ this.manejador }></input>
                                <textarea onChange={ this.manejador } name="mensaje" >Mensaje</textarea>
                            </div>
                            <input type="submit" className="btn btn-primary" value="Enviar"></input>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}