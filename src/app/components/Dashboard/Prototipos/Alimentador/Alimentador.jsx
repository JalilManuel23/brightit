import React, { Component } from 'react'

import '../Prototipos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AlimentadorChart from '../../../Charts/AlimentadorChart';

export default class Cerradura extends Component {
    render() {
        return (
            <div className="container prototipo-container">
                <div className="row d-flex justify-content-center justify-content-md-between">
                    <div className="col-11 col-md-4 data-card d-flex flex-column align-items-center">
                        <p className="titulo-prototipo">Alimentador</p>
                        <img className="img-prototipo" src={this.props.imagenes.alimentador} />
                    </div>
                    <div className="data-card col-11 col-md-7">
                        <AlimentadorChart/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center justify-content-md-between">
                    <div className="data-card d-flex align-items-center col-11 col-md-5">
                        <FontAwesomeIcon className="icono-prototipo" icon={this.props.icons.paw} ></FontAwesomeIcon>
                        <div className="dc-prototipo d-flex flex-column align-items-center">
                            <p>Porciones disponibles:</p>
                            <p className="dato-disp">10</p>
                        </div>
                    </div>
                    <div className="data-card d-flex align-items-center col-11 col-md-6">
                        <FontAwesomeIcon className="icono-prototipo" icon={this.props.icons.clock} ></FontAwesomeIcon>
                        <div className="dc-prototipo d-flex flex-column align-items-center">
                            <p>Último uso:</p>
                            <p className="dato-disp">10:45pm</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
