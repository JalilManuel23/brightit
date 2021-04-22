import React, { Component } from 'react'
import '../Prototipos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerEmpty, faUsers, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import imagenes from '../../../../assets/imagenes';
import { Link } from 'react-router-dom';
import CerraduraChart from '../../../Charts/CerraduraChart';

export default class Cerradura extends Component {
    constructor() {
        super();
        this.state = {
            temperatura: null,
            imagen: null,
            nombre: null,
            empleados: []
        }
        this.cargarDataConfig = this.cargarDataConfig.bind(this);
        this.cargarDataEmpleados = this.cargarDataEmpleados.bind(this);
        this.cargarDatosCerradura = this.cargarDatosCerradura.bind(this);
    }

    componentDidMount() {
        this.cargarDataConfig();
        this.cargarDataEmpleados();
        this.cargarDatosCerradura();
    }

    cargarDataConfig() {
        fetch(`/cerradura/ultimo_registro/1`).then(
            res => {
                res.json().then((data) => {
                    let temperaturaReg = data.registro[0].temperaturaRegistrada;
                    temperaturaReg = parseFloat(temperaturaReg.toFixed(1));
                    this.setState({
                        temperatura: temperaturaReg
                    });
                });
            }
        )
    }
    
    cargarDataEmpleados() {
        fetch('/empleados').then(res => {
            res.json().then((data) => {
                this.setState({ empleados: data.registros })
            });
        })
    }

    cargarDatosCerradura() {
        fetch('/producto/obtener_datos/607e27fd08ba4f52404c4bee').then(res => {
            res.json().then((data) => {
                this.setState({
                    imagen: data.registro.imagen,
                    nombre: data.registro.nombre
                });
            });
        })
    }

    render() {
        return (
            <div className="fondo">
                <div className="container prototipo-container">
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="col-11 col-md-4 data-card d-flex flex-column align-items-center justify-content-between">
                            <p className="titulo-prototipo">{this.state.nombre}</p>
                            <img className="img-prototipo"  src={`/producto/sacar_imagen/${this.state.imagen}`} />
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
                                <p className="dato-disp">{this.state.temperatura} °C</p>
                            </div>
                        </div>
                        <div className="data-card d-flex align-items-center col-11 col-md-3">
                            <FontAwesomeIcon className="icono-prototipo" icon={faUsers} ></FontAwesomeIcon>
                            <div className="dc-prototipo d-flex flex-column align-items-center">
                                <p>Empleados</p>
                                <p className="dato-disp">{this.state.empleados.length}</p>
                            </div>
                        </div>
                        <div className="data-card d-flex align-items-center col-11 col-md-4">
                            <FontAwesomeIcon className="icono-prototipo" icon={faExclamationCircle} ></FontAwesomeIcon>
                            <div className="dc-prototipo d-flex flex-column align-items-center">
                                <p>Temperatura alerta</p>
                                <p className="dato-disp">23 °C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
