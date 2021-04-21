import React, { Component } from 'react'
import '../Prototipos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons"
import imagenes from '../../../../assets/imagenes';
import { Link } from 'react-router-dom';
import AlarmaChart from '../../../Charts/AlarmaChart';

export default class Alarma extends Component {
    constructor() {
        super();
        this.state = {
            horaActiva: null,
            horaDesactivada: null,
            imagen: null,
            nombre: null,
        }
        this.getData = this.getData.bind(this);
        this.cargarDatosAlarma = this.cargarDatosAlarma.bind(this);
    }

    componentDidMount() {
        this.getData();
        this.cargarDatosAlarma();
    }

    getData() {
        fetch('/alarma/ver_registro').then(res => {
            res.json().then((data) => {
                console.log(data);
                var horaActiva = data.registros[0].horaActiva.substring(11, 16);
                var horaDesactivada = data.registros[0].horaDesactivada.substring(11, 16);
                this.setState({
                    horaActiva,
                    horaDesactivada
                })
            });
        });
    }

    cargarDatosAlarma() {
        fetch('/producto/obtener_datos/607e27d208ba4f52404c4bed').then(res => {
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
                        <div className="data-card col-11 col-md-4 d-flex flex-column align-items-center">
                            <p className="titulo-prototipo">{this.state.nombre}</p>
                            <img className="img-prototipo" src={`/producto/sacar_imagen/${this.state.imagen}`} />
                            <Link to="/dashboard/alarma/configuracion" className="btn btn-primary btn-config mt-4">Configurar</Link>
                        </div>
                        <div className="data-card col-11 col-md-7">
                            <AlarmaChart/>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="data-card col-11 col-md-4 d-flex align-items-center">
                            <FontAwesomeIcon className="icono-prototipo" icon={faClock} ></FontAwesomeIcon>
                            <div className="dc-prototipo">
                                <p>Hora encendido</p>
                                <p className="dato-disp">{this.state.horaActiva}</p>
                            </div>
                        </div>
                        <div className="data-card col-11 col-md-4 d-flex align-items-center">
                            <FontAwesomeIcon className="icono-prototipo" icon={faClock} ></FontAwesomeIcon>
                            <div className="dc-prototipo">
                                <p>Hora apagado</p>
                                <p className="dato-disp">{this.state.horaDesactivada}</p>
                            </div>
                        </div>
                        <div className="data-card d-flex align-items-center col-11 col-md-3">
                            <div className="dc-prototipo d-flex flex-md-column align-items-center">
                                <p>Encender/Apagar</p>
                                <button className="btn btn-primary btn-servir">Activar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
