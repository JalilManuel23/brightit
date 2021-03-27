import React, { Component } from 'react'
import '../Prototipos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerEmpty, faUsers, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import imagenes from '../../../../assets/imagenes';
import { Link } from 'react-router-dom';
import CerraduraChart from '../../../Charts/CerraduraChart';

export default class Cerradura extends Component {
    render() {
        return (
            <div className="fondo">
                <div className="container prototipo-container">
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="col-11 col-md-4 data-card d-flex flex-column align-items-center justify-content-between">
                            <p className="titulo-prototipo">Cerradura</p>
                            <img className="img-prototipo" src={imagenes.cerradura} />
                            <Link to="/dashboard/cerradura/configuracion" className="btn btn-primary btn-config">Configurar</Link>
                        </div>
                        <div className="data-card col-11 col-md-7">
                            <CerraduraChart />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="data-card d-flex align-items-center col-11 col-md-4">
                            <FontAwesomeIcon className="icono-prototipo" icon={faThermometerEmpty} ></FontAwesomeIcon>
                            <div className="dc-prototipo d-flex flex-column align-items-center">
                                <p>Temperatura cuarto frio</p>
                                <p className="dato-disp">17 °C</p>
                            </div>
                        </div>
                        <div className="data-card d-flex align-items-center col-11 col-md-3">
                            <FontAwesomeIcon className="icono-prototipo" icon={faUsers} ></FontAwesomeIcon>
                            <div className="dc-prototipo d-flex flex-column align-items-center">
                                <p>Empleados</p>
                                <p className="dato-disp">4</p>
                            </div>
                        </div>
                        <div className="data-card d-flex align-items-center col-11 col-md-4">
                            <FontAwesomeIcon className="icono-prototipo" icon={faExclamationCircle} ></FontAwesomeIcon>
                            <div className="dc-prototipo d-flex flex-column align-items-center">
                                <p>Temperatura alerta</p>
                                <p className="dato-disp">20 °C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
