import React, { Component } from 'react'
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUsersCog, faEllipsisH, faExclamationCircle, faTrash } from "@fortawesome/free-solid-svg-icons"
import './Alarma.css';

export default class ConfiguracionAlarma extends Component {
    constructor() {
        super();
        this.state = {
            codigoVisible: false,
            usuarios: [],
            valores: [],
            idUsuarios: [],
            codigo: null
        }
        this.formularioUsuario = this.formularioUsuario.bind(this);
        this.formularioCodigo = this.formularioCodigo.bind(this);
        this.toggleCodigo = this.toggleCodigo.bind(this);
        this.cargarDatosUsuarios = this.cargarDatosUsuarios.bind(this);
        this.cargarCodigoAlarma = this.cargarCodigoAlarma.bind(this);
        this.eliminarUsuario = this.eliminarUsuario.bind(this);
        this.editarUsuario = this.editarUsuario.bind(this);
    }

    cargarDatosUsuarios() {
        fetch('/alarma/ver_datos_usuarios').then(res => {
            res.json().then((data) => {
                console.log(data);
                data.registros.map(registro => {
                    this.setState({
                        usuarios: [...this.state.usuarios, registro.nombre],
                        valores: [...this.state.valores, registro.contador],
                        idUsuarios: [...this.state.idUsuarios, registro.idUsuario]
                    })
                })
                console.log(this.state);
            });
        })
    }

    cargarCodigoAlarma() {
        fetch('/alarma/ver_codigo').then(res => {
            res.json().then((data) => {
                this.setState({ codigo: data.registros[0].codigo })
            });
        })
    }

    componentDidMount() {
        this.cargarDatosUsuarios();
        this.cargarCodigoAlarma();
    }

    async formularioUsuario() {
        const { value: formValues } = await Swal.fire({
            title: 'Agregar empleado',
            html:
                '<input id="usuario-alarma" type="text" class="swal2-input" placeholder="Nombre del usuario" />',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('usuario-alarma').value
                ]
            }
        })

        if (formValues) {
            this.setState({
                usuarios: [...this.state.usuarios, formValues[0]],
                valores: [...this.state.valores, 0],
                idUsuarios: [...this.state.idUsuarios, this.state.usuarios.length + 1]
            })
            var usuarioNuevo = {
                idUsuario: this.state.usuarios.length,
                nombre: formValues[0],
                contador: 0
            }
            fetch('/alarma/agregar_usuario', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(usuarioNuevo), // data can be `string` or {object}!
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
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
                        title: `¡Usuario agregado!`
                    })
                } else {
                    Swal.fire(
                        'Ha ocurrido un error',
                        'Intentalo de nuevo',
                        'warning'
                    );
                }
            }).catch(error => console.error('Error:', error));
        }
    }
    
    async formularioCodigo() {
        const { value: formValues } = await Swal.fire({
            title: 'Cambiar código',
            html:
                '<input id="codigo" type="text" class="swal2-input" placeholder="Cambia el código de la alarma" />',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('codigo').value
                ]
            }
        })

        if (formValues) {
            this.setState({ codigo: formValues[0] });
            var codigoNuevo = {
                codigo: formValues[0]
            }
            fetch('/alarma/cambiar_codigo', {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(codigoNuevo), // data can be `string` or {object}!
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
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
                        title: `¡Código modificado!`
                    })
                } else {
                    Swal.fire(
                        'Ha ocurrido un error',
                        'Intentalo de nuevo',
                        'warning'
                    );
                }
            }).catch(error => console.error('Error:', error));
        }
    }

    eliminarUsuario(id) {
        var listaId = this.state.idUsuarios;
        console.log(`ID de la BD: ${listaId[id]}`);
        console.log(`ID arrays: ${id}`);

        fetch(`/alarma/eliminar_usuario/${listaId[id]}`, {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json();

            this.setState({
                usuarios: [],
                valores: [],
                idUsuarios: []
            })

            this.cargarDatosUsuarios();

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
                    title: `¡Usuario agregado!`
                })
            } else {
                Swal.fire(
                    'Ha ocurrido un error',
                    'Intentalo de nuevo',
                    'warning'
                );
            }
        }).catch(error => console.error('Error:', error));
    }

    async editarUsuario(id, nombre, valor) {
        var listaId = this.state.idUsuarios;
        const { value: formValues } = await Swal.fire({
            title: 'Agregar empleado',
            html:
                `<input id="usuario-alarma" type="text" value=${nombre} class="swal2-input" placeholder="Nombre del usuario" />` +
                `<input id="usos-alarma" type="number" value=${valor} class="swal2-input" placeholder="Usos" />`,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('usuario-alarma').value,
                    document.getElementById('usos-alarma').value,
                ]
            }
        });

        let newUser = {
            nombre: formValues[0],
            contador: formValues[1]
        }

        fetch(`/alarma/actualizar_usuario/${listaId[id]}`, {
            method: 'PUT',
            body:  JSON.stringify(newUser),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json();

            this.setState({
                usuarios: [],
                valores: [],
                idUsuarios: []
            })

            this.cargarDatosUsuarios();

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
                    title: `¡Usuario agregado!`
                })
            } else {
                Swal.fire(
                    'Ha ocurrido un error',
                    'Intentalo de nuevo',
                    'warning'
                );
            }
        }).catch(error => console.error('Error:', error));
    }

    toggleCodigo() {
        this.setState({ codigoVisible: !this.state.codigoVisible });
    }

    render() {
        var listaUsuarios = this.state.usuarios;
        var listaValores = this.state.valores;
        const usuarios = [];

        for (const [index, value] of listaUsuarios.entries()) {
            usuarios.push(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                    <td>{listaValores[index]}</td>
                    <td>
                        <FontAwesomeIcon icon={faEllipsisH} id="opciones-usuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></FontAwesomeIcon>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" onClick={() => this.editarUsuario(index, value, listaValores[index])}>Editar</a>
                            <a class="dropdown-item" onClick={() => this.eliminarUsuario(index)}>Eliminar</a>
                        </div>
                    </td>
                </tr>
            )
        }

        return (
            <div>
                <div className="banner">
                    <div className="container d-flex flex-column align-items-center flex-md-row justify-content-md-around text-md-start align-items-start">
                        <div className="d-flex flex-column align-items-center justify-content-around align-items-md-start text-md-start">
                            <h2 className="titulo text-center text-md-left">Configurar Alarma</h2>
                        </div>
                    </div>
                </div>
                <div className="container mb-4 d-flex justify-content-between">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div class="card">
                                <h5 class="card-header setting-header">
                                    <FontAwesomeIcon icon={faUsers} ></FontAwesomeIcon>
                                    Usuarios
                                </h5>
                                <div class="card-body">
                                    <h5 class="card-title">Administra a los usuarios del dispositivo</h5>
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Usuario</th>
                                                <th scope="col">Usos</th>
                                                <th scope="col">Configuración</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {usuarios.length > 0 ? usuarios : 
                                                <tr><th scope="col">Sin</th>
                                                    <th scope="col">usuarios</th>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                    <div className="text-center">
                                        <button class="btn btn-primary mt-4 col-12 col-md-6" type="button" onClick={this.formularioUsuario}>
                                            Agregar Usuario
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div class="card">
                                <h5 class="card-header setting-header">
                                    <FontAwesomeIcon icon={faExclamationCircle} ></FontAwesomeIcon>
                                    Cambiar Código
                                </h5>
                                <div class="card-body">
                                    <h5 class="card-title">Establece el código para acceder</h5>
                                    <div className="porciones-restantes">
                                        {
                                            (this.state.codigoVisible) ?
                                                <p className="numero-porcion codigo-alarma">{this.state.codigo}</p> :
                                                <input type="password" className="numero-porcion codigo-alarma" value={this.state.codigo} disabled></input>
                                        }
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex flex-column col-12 col-md-6">
                                            <button class="btn btn-primary" type="button" onClick={this.toggleCodigo}>
                                                {(this.state.codigoVisible) ? 'Ocultar código' : 'Ver código'}
                                            </button>
                                            <button class="btn btn-primary mt-4" type="button" onClick={this.formularioCodigo}>
                                                Cambiar código
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
