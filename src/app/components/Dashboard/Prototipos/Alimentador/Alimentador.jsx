import React, { Component } from 'react'
import '../Prototipos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faClock } from "@fortawesome/free-solid-svg-icons"
import imagenes from '../../../../assets/imagenes';
import { Link } from 'react-router-dom';
import AlimentadorChart from '../../../Charts/AlimentadorChart';

export default class Cerradura extends Component {
    constructor() {
        super();
        this.state = {
            hora: null,
            porciones: null
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('/alimentador/ver_registro/6063ca6922bc2823085fa739').then(res => {
            res.json().then((data) => {
                console.log(data);
                var hora = data.registro.horaUltimoUso.substring(11, 16);
                var porciones = data.registro.numeroPorcion;
                this.setState({
                    hora,
                    porciones
                })
            });
        });
    }
    render() {
        return (
            <div className="fondo">
                <div className="container prototipo-container">
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="col-11 col-md-4 data-card d-flex flex-column align-items-center justify-content-between">
                            <p className="titulo-prototipo">Alimentador</p>
                            <img className="img-prototipo" src={imagenes.alimentador} />
                            <Link to="/dashboard/alimentador/configuracion" className="btn btn-primary btn-config">Configurar</Link>
                        </div>
                        <div className="data-card col-11 col-md-7">
                            <AlimentadorChart />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="data-card d-flex align-items-center col-11 col-md-4">
                            <FontAwesomeIcon className="icono-prototipo" icon={faPaw} ></FontAwesomeIcon>
                            <div className="dc-prototipo d-flex flex-column align-items-center">
                                <p>Porciones disponibles:</p>
                                <p className="dato-disp">{this.state.porciones}</p>
                            </div>
                        </div>
                        <div className="data-card d-flex align-items-center col-11 col-md-4">
                            <FontAwesomeIcon className="icono-prototipo" icon={faClock} ></FontAwesomeIcon>
                            <div className="dc-prototipo d-flex flex-column align-items-center">
                                <p>Último uso:</p>
                                <p className="dato-disp">{this.state.hora}</p>
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
