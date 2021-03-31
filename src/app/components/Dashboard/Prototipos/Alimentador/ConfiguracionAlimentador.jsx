import React, { Component } from 'react'
import './Alimentador.css';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faListOl, faClock } from "@fortawesome/free-solid-svg-icons"
import imagenes from '../../../../assets/imagenes';

export default class ConfiguracionAlimentador extends Component {
    constructor() {
        super();
        this.state = {
            horas: [],
            porciones: null
        }
        this.formularioHora = this.formularioHora.bind(this);
        this.cargarDatosHoras = this.cargarDatosHoras.bind(this);
        this.cargarDatosPorciones = this.cargarDatosPorciones.bind(this);
        this.editarHora = this.editarHora.bind(this);
        this.eliminarHora = this.eliminarHora.bind(this);
        this.reiniciarPorciones = this.reiniciarPorciones.bind(this);
    }

    componentDidMount() {
        this.cargarDatosHoras();
        this.cargarDatosPorciones();
    }

    cargarDatosHoras() {
        fetch('/alimentador/ver_horas').then(res => {
            res.json().then((data) => {
                this.setState({
                    horas: data.registros
                })
            });
        })
    }

    cargarDatosPorciones() {
        fetch('/alimentador').then(res => {
            res.json().then((data) => {
                this.setState({
                    porciones: data.registros[0].numeroPorcion
                })
            });
        })
    }

    async formularioHora() {
        const { value: formValues } = await Swal.fire({
            title: 'Agregar alerta',
            html:
                '<input id="hora-nueva" type="time" class="swal2-input" placeholder="Ingresa la hora" />',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('hora-nueva').value
                ]
            }
        })

        if (formValues) {
            let horaNueva = {
                hora: formValues[0]
            }

            fetch('/alimentador/agregar_hora', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(horaNueva), // data can be `string` or {object}!
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                res.json();
                this.setState({ horas: [] });
                this.cargarDatosHoras();
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
                        title: `¡Hora agregada!`
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

    async editarHora(id) {
        const { value: formValues } = await Swal.fire({
            title: 'Editar alerta',
            html:
                '<input id="hora-nueva" type="time" class="swal2-input" placeholder="Ingresa la hora" />',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('hora-nueva').value
                ]
            }
        })

        if (formValues) {
            let horaNueva = {
                hora: formValues[0]
            }

            fetch(`/alimentador/editar_hora/${id}`, {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(horaNueva), // data can be `string` or {object}!
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                res.json();
                this.setState({ horas: [] });
                this.cargarDatosHoras();
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
                        title: `¡Hora agregada!`
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

    eliminarHora(id) {
        fetch(`/alimentador/eliminar_hora/${id}`, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json();
            this.setState({ horas: [] });
            this.cargarDatosHoras();

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

    reiniciarPorciones() {
        let porcionesNuevo = {
            numeroPorcion: '10'
        }

        fetch(`/alimentador/reiniciar_porciones/6063ca6922bc2823085fa739`, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(porcionesNuevo), // data can be `string` or {object}!
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json();
            this.setState({ porciones: 10 });

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
                    title: `¡Porciones restablecidas!`
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
        let listaHoras = this.state.horas;

        const horas = [];

        for (const [index, value] of listaHoras.entries()) {
            horas.push(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.hora}</td>
                    <td>
                        <FontAwesomeIcon icon={faEllipsisH} id="opciones-usuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></FontAwesomeIcon>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" onClick={() => this.editarHora(value._id)}>Editar</a>
                            <a class="dropdown-item" onClick={() => this.eliminarHora(value._id)}>Eliminar</a>
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
                            <h2 className="titulo text-center text-md-left">Configurar Alimentador</h2>
                        </div>
                    </div>
                </div>
                <div className="container mb-4 d-flex justify-content-between">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div class="card">
                                <h5 class="card-header setting-header">
                                    <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon>
                                    Programar dispositivo
                                </h5>
                                <div class="card-body">
                                    <h5 class="card-title">Establece las horas en las que quieres alimentar a tu mascota</h5>
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Hora</th>
                                                <th scope="col">Configuración</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {horas.length > 0 ? horas :
                                                <tr><th scope="col">Sin</th>
                                                    <th scope="col">datos</th>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                    <div className="text-center">
                                        <button class="btn btn-primary" type="button" onClick={() => this.formularioHora()}>
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div class="card">
                                <h5 class="card-header setting-header">
                                    <FontAwesomeIcon icon={faListOl} ></FontAwesomeIcon>
                                    Porciones disponibles
                                </h5>
                                <div class="card-body">
                                    <h5 class="card-title">Restablece el número de porciones que contiene el alimentador</h5>

                                    <div className="porciones-restantes">
                                        <p className="numero-porcion">{this.state.porciones} disp.</p>
                                    </div>
                                    <div className="text-center">
                                        <button class="btn btn-primary" type="button" onClick={() => this.reiniciarPorciones()}>
                                            Restablecer
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
