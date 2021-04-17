import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDoorOpen, faPaw, faPlus, faThermometerEmpty } from "@fortawesome/free-solid-svg-icons"
import imagenes from '../../assets/imagenes';
import CerraduraChart from '../Charts/CerraduraChart';

import './Dashboard.css'
import Welcome from './Welcome/Welcome';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            image: null
        }
        this.cargarDatosUsuario = this.cargarDatosUsuario.bind(this);
    }

    componentDidMount() {
        this.cargarDatosUsuario(this.props.usuario);
    }

    cargarDatosUsuario(id) {
        fetch(`/usuarios/ver_usuario/${id}`).then(
            res => {
                res.json().then((data) => {
                    this.setState({
                        name: data.usuario.name,
                        image: data.usuario.image
                    });
                });
            }
        )
    }

    render() {
        const userImage = (this.state.image) ?
            <img className="p-3 user-image" alt="Usuario" src={`usuarios/sacar_imagen/${this.state.image}`} alt="usuario" /> :
            <img className="col-3 col-md-7 p-3 user-image" alt="Usuario" src={imagenes.usuario} alt="usuario" />
        return (
            <div className="fondo">
                <div className="container">
                    <div className="row d-flex justify-content-md-between">
                        <div className="container-info-user col-12 col-md-3">
                            <div className="info-user col-12 d-flex flex-column align-items-center p-2">
                                {userImage}
                                <p>¡Bienvenido {this.state.name}!</p>
                                <div className="col-12 dispositivos d-flex flex-column align-items-center justify-content-between">
                                    <p>Mis dispositivos</p>
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <Link to='/dashboard/alarma' className="li-dis d-flex flex-column align-items-center">
                                            <div className="disp rosa">
                                                <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon>
                                            </div>
                                            <p className="nombre-disp">Alarma</p>
                                        </Link>
                                        <Link to='/dashboard/cerradura' className="li-dis  d-flex flex-column align-items-center">
                                            <div className="disp verde">
                                                <FontAwesomeIcon icon={faDoorOpen} ></FontAwesomeIcon>
                                            </div>
                                            <p className="nombre-disp">Cerradura</p>
                                        </Link>
                                        <Link to='/dashboard/alimentador' className="li-dis d-flex flex-column align-items-center">
                                            <div className="disp azul">
                                                <FontAwesomeIcon icon={faPaw} ></FontAwesomeIcon>
                                            </div>
                                            <p className="nombre-disp">Alimentador</p>
                                        </Link>
                                        <Link className="li-dis d-flex flex-column align-items-center">
                                            <div className="disp gris">
                                                <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>
                                            </div>
                                            <p className="nombre-disp">Añadir</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-info-main col-12 col-md-8 d-flex flex-column align-items-center justify-content-between">
                            <Welcome />
                            <div className="datos-disp d-flex flex-column flex-md-row justify-content-md-between">
                                <div className="d-flex flex-column alimen-cerradura justify-content-between">
                                    <div className="alimen">
                                        <div className="icono-disp">
                                            <FontAwesomeIcon icon={faPaw} ></FontAwesomeIcon>
                                        </div>
                                        <div className="dato-cantidad">
                                            <p>Porciones de alimento</p>
                                            <p className="dato-disp">10</p>
                                        </div>
                                    </div>
                                    <div className="cerradura">
                                        <div className="icono-disp">
                                            <FontAwesomeIcon icon={faThermometerEmpty} ></FontAwesomeIcon>
                                        </div>
                                        <div className="dato-cantidad">
                                            <p>Temperatura cuarto frio</p>
                                            <p className="dato-disp">15°c</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="alarma d-flex flex-row align-items-center justify-content-around flex-md-column alig-items-md-center justify-content-md-around">
                                    <CerraduraChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
