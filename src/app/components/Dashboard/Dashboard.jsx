import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-md-between">
                    <div className="container-info-user col-12 col-md-3">
                        <div className="info-user col-12 d-flex flex-column align-items-center p-2">
                            <img src={this.props.imagenes.userMale} className="col-3 col-md-7 p-3" alt="Usuario" />
                            <p>¡Bienvenido Manuel!</p>
                            <div className="col-12 dispositivos d-flex flex-column align-items-center justify-content-between">
                                <p>Mis dispositivos</p>
                                <div className="d-flex flex-wrap justify-content-between">
                                    <Link className="li-dis d-flex flex-column align-items-center">
                                        <div className="disp rosa">
                                            <FontAwesomeIcon icon={ this.props.icons.clock } ></FontAwesomeIcon>
                                        </div>
                                        <p className="nombre-disp">Alarma</p>
                                    </Link>
                                    <Link className="li-dis  d-flex flex-column align-items-center">
                                        <div className="disp verde">
                                            <FontAwesomeIcon icon={ this.props.icons.door } ></FontAwesomeIcon>
                                        </div>
                                        <p className="nombre-disp">Cerradura</p>
                                    </Link>
                                    <Link className="li-dis d-flex flex-column align-items-center">
                                        <div className="disp azul">
                                            <FontAwesomeIcon icon={ this.props.icons.paw } ></FontAwesomeIcon>
                                        </div>
                                        <p className="nombre-disp">Alimentador</p>
                                    </Link>
                                    <Link className="li-dis d-flex flex-column align-items-center">
                                        <div className="disp gris">
                                            <FontAwesomeIcon icon={ this.props.icons.plus } ></FontAwesomeIcon>
                                        </div>
                                        <p className="nombre-disp">Añadir</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-info-main col-12 col-md-8">M</div>
                </div>
            </div>
        )
    }
}
