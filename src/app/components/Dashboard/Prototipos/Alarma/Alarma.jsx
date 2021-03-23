import React, { Component } from 'react'

import '../Prototipos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class Alarma extends Component {
    render() {
        return (
            <div className="fondo">
                <div className="container prototipo-container">
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="data-card col-11 col-md-4 d-flex flex-column align-items-center">
                            <p className="titulo-prototipo">Alarma</p>
                            <img className="img-prototipo" src={this.props.imagenes.alarma} />
                            <label class="switch">
                                <input type="checkbox"/>
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div className="data-card col-11 col-md-7">
                            2
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="data-card col-11 col-md-6 d-flex align-items-center">
                            <FontAwesomeIcon className="icono-prototipo" icon={this.props.icons.clock} ></FontAwesomeIcon>
                            <div className="dc-prototipo">
                                <p>Hora encendido</p>
                                <p className="dato-disp">7:30am</p>
                            </div>
                        </div>
                        <div className="data-card col-11 col-md-5 d-flex align-items-center">
                            <FontAwesomeIcon className="icono-prototipo" icon={this.props.icons.clock} ></FontAwesomeIcon>
                            <div className="dc-prototipo">
                                <p>Hora apagado</p>
                                <p className="dato-disp">10:30am</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
