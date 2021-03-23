import React, { Component } from 'react'

import '../Prototipos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Cerradura extends Component {
    render() {
        return (
            <div className="fondo">
                <div className="container prototipo-container">
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="col-11 col-md-4 d-flex flex-column">
                            <div className="data-card d-flex flex-column align-items-center">
                                <p className="titulo-prototipo">Cerradura</p>
                                <img className="img-prototipo" src={this.props.imagenes.cerradura} />
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div className="data-card d-flex align-items-center">
                                <FontAwesomeIcon className="icono-prototipo" icon={this.props.icons.temperatura} ></FontAwesomeIcon>
                                <div className="dc-prototipo d-flex flex-column align-items-center">
                                    <p>Temperatura cuarto frio</p>
                                    <p className="dato-disp">17 °C</p>
                                </div>
                            </div>
                        </div>
                        <div className="data-card col-11 col-md-7">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Empleado</th>
                                        <th scope="col">Entrada</th>
                                        <th scope="col">Salida</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Juan</td>
                                        <td>7:30am</td>
                                        <td>10:50pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Juan</td>
                                        <td>7:30am</td>
                                        <td>10:50pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Juan</td>
                                        <td>7:30am</td>
                                        <td>10:50pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
