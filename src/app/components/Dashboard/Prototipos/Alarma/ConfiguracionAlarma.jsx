import React, { Component } from 'react'
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUsersCog, faEllipsisH, faExclamationCircle} from "@fortawesome/free-solid-svg-icons"
import './Alarma.css';

export default class ConfiguracionAlarma extends Component {
    constructor() {
        super();
        this.state = {
            codigoVisible: false
        }
        this.formularioUsuario = this.formularioUsuario.bind(this);
        this.formularioCodigo = this.formularioCodigo.bind(this);
        this.toggleCodigo = this.toggleCodigo.bind(this);
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

        // if (formValues) {
        //     Swal.fire(JSON.stringify(formValues))
        // }
    }

    async formularioCodigo() {
        const { value: formValues } = await Swal.fire({
            title: 'Cambiar código',
            html:
                '<input id="codigo-alarma" type="text" class="swal2-input" placeholder="Cambia el código de la alarma" />',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('codigo-alarma').value
                ]
            }
        })

        // if (formValues) {
        //     Swal.fire(JSON.stringify(formValues))
        // }
    }

    toggleCodigo() {
        this.setState({codigoVisible: !this.state.codigoVisible});
    }

    render() {
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
                                    Empleados
                                </h5>
                                <div class="card-body">
                                    <h5 class="card-title">Administra a los usuarios del dispositivo</h5>
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Usuario</th>
                                                <th scope="col">Configurar <FontAwesomeIcon icon={faUsersCog}></FontAwesomeIcon></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Juan</td>
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
                                    <button class="btn btn-primary mt-4" type="button" onClick={this.formularioUsuario}>
                                        Agregar Usuario
                                    </button>
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
                                    <div className="mt-4 d-flex flex-column">
                                        <div className="porciones-restantes">
                                            {
                                                (this.state.codigoVisible) ? 
                                                <p className="numero-porcion codigo-alarma">1234</p> :
                                                <input type="password" className="numero-porcion codigo-alarma" value="1234" disabled></input> 
                                            }  
                                        </div>
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
        )
    }
}
