import React, { Component } from 'react'
import './Cerradura.css';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUsersCog, faEllipsisH, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"


export default class ConfiguracionCerradura extends Component {
    constructor() {
        super();
        this.state = {
            temperaturaAlerta: null,
            empleados: []
        }
        this.formularioEmpleado = this.formularioEmpleado.bind(this);
        this.formularioAlerta = this.formularioAlerta.bind(this);
        this.verPIN = this.verPIN.bind(this);
        this.cargarDataConfig = this.cargarDataConfig.bind(this);
        this.cargarDataEmpleados = this.cargarDataEmpleados.bind(this);
        this.eliminarEmpleado = this.eliminarEmpleado.bind(this);
    }

    componentDidMount() {
        this.cargarDataConfig();
        this.cargarDataEmpleados();
    }

    cargarDataConfig() {
        fetch('/cerradura/ver_registros_config').then(res => {
            res.json().then((data) => {
                data.registros.map(registro => {
                    this.setState({ temperaturaAlerta: registro.temperaturaAlerta })
                })
                // console.log(this.state);
            });
        })
    }

    cargarDataEmpleados() {
        fetch('/empleados').then(res => {
            res.json().then((data) => {
                this.setState({ empleados: data.registros })
            });
        })
    }

    async formularioEmpleado() {
        const { value: formValues } = await Swal.fire({
            title: 'Agregar empleado',
            html:
                '<input id="nombre" type="text" class="swal2-input" placeholder="Nombre del empleado" />' +
                '<input id="codigo" type="password" class="swal2-input" id="exampleInputPassword1" placeholder="Código" />' +
                '<input id="ingreso" type="datetime-local" class="swal2-input" id="exampleInputPassword1" placeholder="Ingreso" />' +
                '<input id="salida" type="datetime-local" class="swal2-input" id="exampleInputPassword1" placeholder="Salida" />',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('nombre').value,
                    document.getElementById('codigo').value,
                    document.getElementById('ingreso').value,
                    document.getElementById('salida').value
                ]
            }
        })

        if (formValues) {
            const empleadoNuevo = {
                nombre: formValues[0],
                pinEmpleado: formValues[1],
                horaIngreso: formValues[2],
                horaSalida: formValues[3]
            }
            fetch('/empleados/crear_registro', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(empleadoNuevo), // data can be `string` or {object}!
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                res.json();
                this.setState({empleados: []});
                this.cargarDataEmpleados();
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
                        title: `¡Empleado agregado!`
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

    async formularioAlerta() {
        const { value: formValues } = await Swal.fire({
            title: 'Agregar alerta',
            html:
                '<input id="temperatura" type="text" class="swal2-input" placeholder="Ingresa la temperatura limite" />',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('temperatura').value
                ]
            }
        })

        // if (formValues) {
        //     Swal.fire(JSON.stringify(formValues))
        // }
    }

    verPIN(usuario, pin) {
        Swal.fire(`El PIN de ${usuario} es: ${pin}`);
    }

    eliminarEmpleado(id) {
        fetch(`/empleados/eliminar_registro/${id}`, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json();
            this.setState({empleados: []});
            this.cargarDataEmpleados();
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
                    title: `¡Empleado eliminado!`
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

    render() {
        const empleados = [];
        let listaUsuarios = this.state.empleados;
        for (const [index, value] of listaUsuarios.entries()) {
            var horaIngreso = value.horaIngreso.substring(11, 16);
            var horaSalida = value.horaSalida.substring(11, 16);
            empleados.push(
                <tr key={index}>
                    <td>{value.nombre}</td>
                    <td>{horaIngreso}</td>
                    <td>{horaSalida}</td>
                    <td>
                        <FontAwesomeIcon icon={faEllipsisH} id="opciones-usuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></FontAwesomeIcon>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" onClick={() => this.verPIN(value.nombre, value.pinEmpleado)}>Ver PIN</a>
                            <a class="dropdown-item">Editar</a>
                            <a class="dropdown-item" onClick={() => this.eliminarEmpleado(value._id)}>Eliminar</a>
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
                            <h2 className="titulo text-center text-md-left">Configurar Cerradura</h2>
                        </div>
                    </div>
                </div>
                <div className="container mb-4 d-flex justify-content-between">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div class="card">
                                <h5 class="card-header setting-header">
                                    <FontAwesomeIcon icon={faUsers} ></FontAwesomeIcon>
                                    Empleados
                                </h5>
                                <div class="card-body">
                                    <h5 class="card-title">Administra a los usuarios del dispositivo</h5>
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Empleado</th>
                                                <th scope="col">Entrada</th>
                                                <th scope="col">Salida</th>
                                                <th scope="col"><FontAwesomeIcon icon={faUsersCog}></FontAwesomeIcon></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {empleados}
                                        </tbody>
                                    </table>
                                    <div className="text-center">
                                        <button class="btn btn-primary mt-4" type="button" onClick={this.formularioEmpleado}>
                                            Agregar Empleado
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div class="card">
                                <h5 class="card-header setting-header">
                                    <FontAwesomeIcon icon={faExclamationCircle} ></FontAwesomeIcon>
                                    Agregar alerta
                                </h5>
                                <div class="card-body">
                                    <h5 class="card-title">Establece la temperatura máxima para mostrar una alerta</h5>
                                    <div className="porciones-restantes">
                                        <p className="numero-porcion">{this.state.temperaturaAlerta} °C</p>
                                    </div>
                                    <div className="text-center">
                                        <button class="btn btn-primary" type="button" onClick={this.formularioAlerta}>
                                            Editar
                                        </button>
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
