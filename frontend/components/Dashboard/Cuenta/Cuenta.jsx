import React, { Component } from 'react'
import './Cuenta.css';
import imagenes from '../../../assets/imagenes.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import Swal from 'sweetalert2';
import axios from 'axios';

export default class Cuenta extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            image: null,
            imageFija: null,
            nameFijo: '',
            redirect: null
        };
        this.manejador = this.manejador.bind(this);
        this.cargarDatos = this.cargarDatos.bind(this);
        this.editarCuenta = this.editarCuenta.bind(this);
        this.fileChange = this.fileChange.bind(this);
    }

    manejador(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    fileChange(e) {
        this.setState({ image: e.target.files[0] });
        console.log(e.target.files[0]);
    }

    cargarDatos(id) {
        fetch(`/usuarios/ver_usuario/${id}`).then(
            res => {
                res.json().then((data) => {
                    this.setState({
                        email: data.usuario.email,
                        name: data.usuario.name,
                        nameFijo: data.usuario.name,
                        image: data.usuario.image,
                        imageFija: data.usuario.image
                    });
                });
            }
        )
    }

    editarCuenta = (e) => {
        e.preventDefault();

        const datosNuevos = {
            email: this.state.email,
            name: this.state.name
        }

        fetch(`/usuarios/editar_usuario/${this.props.usuario}`, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(datosNuevos), // data can be `string` or {object}!
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status == 200) {
                if (
                    this.state.image != null &&
                    this.state.image != undefined &&
                    this.state.image != ""
                ) {
                    const formData = new FormData();

                    const image = this.state.image;
                    const name = this.state.image.name;

                    formData.append("image", image, name);

                    axios
                        .put("usuarios/cargar_imagen/" + this.props.usuario, formData)
                        .then((res) => {
                            if (res.data.usuarioActualizado) {
                                this.cargarDatos(this.props.usuario);
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
                                    title: `¡Datos e imagen actualizados correctamente!`
                                })
                            } else {
                                Swal.fire(
                                    'Hubo un problema',
                                    'Intenta de nuevo',
                                    'warning'
                                );
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
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
                        title: `¡Datos actualizados correctamente!`
                    })
                }
            }
        }).catch(error => console.error('Error:', error));
        this.cargarDatos(this.props.usuario);
    }

    componentDidMount() {
        this.cargarDatos(this.props.usuario);
    }

    render() {
        const userImage = (this.state.image) ?
            <img className="img-user-e" src={`usuarios/sacar_imagen/${this.state.image}`} alt="usuario" /> :
            <img className="img-user-e" src={imagenes.usuario} alt="usuario" />

        return (
            <div className="container">
                <div className="d-flex flex-column align-items-center">
                    <div className="img-edit">
                        {userImage}
                    </div>
                    <div className="datos-user-e mt-3">
                        <p className="nombre-user-e">{this.state.nameFijo}</p>
                    </div>
                </div>
                <form className="mt-4" method="POST" onSubmit={this.editarCuenta}>
                    <div class="form-row d-flex justify-content-around">
                        <div class="form-group col-md-5">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.manejador} />
                        </div>
                    </div>
                    <div class="form-row d-flex justify-content-around">
                        <div class="form-group col-md-5">
                            <label for="inputEmail4">Usuario</label>
                            <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.manejador} />
                        </div>
                    </div>
                    <div class="form-row d-flex justify-content-around">
                        <div class="form-group col-md-5">
                            <label for="inputEmail4">Imagen de usuario:</label>
                            <input type="file" class="form-control" name="img-user" onChange={this.fileChange} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" class="btn btn-light btn-auto">Guardar Cambios</button>
                    </div>
                </form>
            </div>
        )
    }
}
