import React, { Component } from 'react'
import './Alimentador.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ConfiguracionAlimentador extends Component {
    render() {
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
                                    <FontAwesomeIcon icon={this.props.icons.clock} ></FontAwesomeIcon>
                                    Programar dispositivo
                                </h5>
                                <div class="card-body">
                                    <h5 class="card-title">Establece las horas en las que quieres alimentar a tu mascota</h5>
                                    <div className="mt-4 d-flex flex-column">
                                        <div className="hora-programada">
                                            <p className="hora">7:30pm</p>
                                            <FontAwesomeIcon icon={this.props.icons.trash} ></FontAwesomeIcon>
                                        </div>
                                        <div className="hora-programada">
                                            <p className="hora">7:30pm</p>
                                            <FontAwesomeIcon icon={this.props.icons.trash} ></FontAwesomeIcon>
                                        </div>
                                        <div className="hora-programada">
                                            <p className="hora">7:30pm</p>
                                            <FontAwesomeIcon icon={this.props.icons.trash} ></FontAwesomeIcon>
                                        </div>
                                        <button class="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                            Agregar Hora
                                        </button>
                                        <div class="collapse" id="collapseExample">
                                            <div class="card card-body">
                                                <label htmlFor="hora">Establecer hora:</label>
                                                <input type="time" name="hora" id="hora" className="mb-4"/>
                                                <button className="btn btn-primary mt-2">Agregar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div class="card">
                                <h5 class="card-header setting-header">
                                    <FontAwesomeIcon icon={this.props.icons.listOl} ></FontAwesomeIcon>
                                    Porciones disponibles
                                </h5>
                                <div class="card-body">
                                    <h5 class="card-title">Restablece el número de porciones que contiene el alimentador</h5>
                                    <div className="mt-4 d-flex flex-column">
                                        <div className="porciones-restantes">
                                            <p className="numero-porcion">10 disp.</p>
                                        </div>
                                        <button class="btn btn-primary" type="button">
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
