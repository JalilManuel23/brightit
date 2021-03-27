import React, { Component } from 'react'
import './Cerradura.css';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUsersCog, faEllipsisH, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

export default class ConfiguracionCerradura extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.formularioEmpleado = this.formularioEmpleado.bind(this);
        this.formularioAlerta = this.formularioAlerta.bind(this);
    }

    async formularioEmpleado() {
        const { value: formValues } = await Swal.fire({
            title: 'Agregar empleado',
            html:
                '<input id="nombre" type="text" class="swal2-input" placeholder="Nombre del empleado" />' +
                '<input id="codigo" type="password" class="swal2-input" id="exampleInputPassword1" placeholder="Código" />',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('nombre').value,
                    document.getElementById('codigo').value
                ]
            }
        })

        // if (formValues) {
        //     Swal.fire(JSON.stringify(formValues))
        // }
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

    render() {
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
                                            <tr>
                                                <td>Juan</td>
                                                <td>7:30am</td>
                                                <td>10:50pm</td>
                                                <td>
                                                    <FontAwesomeIcon icon={faEllipsisH} id="opciones-usuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></FontAwesomeIcon>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#">Editar</a>
                                                        <a class="dropdown-item" href="#">Eliminar</a>
                                                    </div>
                                                </td>
                                            </tr>
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
                                        <p className="numero-porcion">15°C</p>
                                    </div>
                                    <div className="text-center">
                                        <button class="btn btn-primary" type="button" onClick={this.formularioAlerta}>
                                            Agregar Alerta
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
