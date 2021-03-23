import React, { Component } from 'react'

import '../Prototipos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import AlimentadorChart from '../../../Charts/AlimentadorChart';

export default class Cerradura extends Component {
    render() {
        return (
            <div className="fondo">
                <div className="container prototipo-container">
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="col-11 col-md-4 data-card d-flex flex-column align-items-center justify-content-between">
                            <p className="titulo-prototipo">Alimentador</p>
                            <img className="img-prototipo" src={this.props.imagenes.alimentador} />
                            <Link to="/dashboard/alimentador/configuracion" className="btn btn-primary btn-config">Configurar</Link>
                        </div>
                        <div className="data-card col-11 col-md-7">
                            <AlimentadorChart />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="data-card d-flex align-items-center col-11 col-md-4">
                            <FontAwesomeIcon className="icono-prototipo" icon={this.props.icons.paw} ></FontAwesomeIcon>
                            <div className="dc-prototipo d-flex flex-column align-items-center">
                                <p>Porciones disponibles:</p>
                                <p className="dato-disp">10</p>
                            </div>
                        </div>
                        <div className="data-card d-flex align-items-center col-11 col-md-4">
                            <FontAwesomeIcon className="icono-prototipo" icon={this.props.icons.clock} ></FontAwesomeIcon>
                            <div className="dc-prototipo d-flex flex-column align-items-center">
                                <p>Último uso:</p>
                                <p className="dato-disp">10:45pm</p>
                            </div>
                        </div>
                        <div className="data-card d-flex align-items-center col-11 col-md-3">
                            <div className="dc-prototipo d-flex flex-column align-items-center">
                                <p>Servir porción ahora</p>
                                <button className="btn btn-primary btn-servir">Servir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
