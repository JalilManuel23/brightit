import React, { Component } from 'react'
import '../Prototipos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faClock } from "@fortawesome/free-solid-svg-icons"
import imagenes from '../../../../assets/imagenes';
import { Link, Redirect } from 'react-router-dom';
import AlimentadorChart from '../../../Charts/AlimentadorChart';
import Swal from 'sweetalert2';

export default class Cerradura extends Component {
    constructor() {
        super();
        this.state = {
            hora: null,
            porciones: null,
            datos: null,
            imagen: null,
            nombre: null,
            redirect: null
        }
        this.getData = this.getData.bind(this);
        this.cargarDatosGrafico = this.cargarDatosGrafico.bind(this);
        this.cargarDatosAlimentador = this.cargarDatosAlimentador.bind(this);
        this.servir = this.servir.bind(this);
        this.refrescar = this.refrescar.bind(this);
    }

    componentDidMount() {
        this.getData();
        this.cargarDatosAlimentador();
    }

    getData() {
        fetch('/alimentador/ver_registro/6063ca6922bc2823085fa739').then(res => {
            res.json().then((data) => {
                var hora = data.registro.horaUltimoUso.substring(0,5);
                var porciones = data.registro.numeroPorcion;
                this.setState({
                    hora,
                    porciones
                })
            });
        });
    }

    cargarDatosGrafico() {
        fetch('/alimentador/obtener_porciones').then(res => {
            res.json().then((data) => {
                this.setState({
                    datos: {
                        labels: data.meses,
                        datasets: [{
                            data: data.valores,
                            label: 'Porciones',
                            backgroundColor: ['rgba(104,183,220,255)','rgba(104,148,220,255)', 'rgba(104,113,220,255)', 'rgba(128,104,220,255)', 'rgba(163,104,220,255)', 'rgba(199,104,220,255)'],
                            borderColor: ['rgba(104,183,220,255)','rgba(104,148,220,255)', 'rgba(104,113,220,255)', 'rgba(128,104,220,255)', 'rgba(163,104,220,255)', 'rgba(199,104,220,255)'],
                            borderWidth: 2,
                        }] 
                    }
                })
            });
        })
    }

    cargarDatosAlimentador() {
        fetch('/producto/obtener_datos/607e281808ba4f52404c4bef').then(res => {
            res.json().then((data) => {
                this.setState({
                    imagen: data.registro.imagen,
                    nombre: data.registro.nombre
                });
            });
        })
    }

    servir() {
        if(this.state.porciones > 0) {
            const objeto = {
                servir: "true"
            }
    
            fetch('/alimentador/servir/6063ca6922bc2823085fa739', {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(objeto), // data can be `string` or {object}!
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'No hay porciones disponibles',
                text: 'El dispositivo no cuenta con alimento disponible'
            })
        }

        setTimeout(this.refrescar, 7000);
    }

    refrescar() {
        this.getData();
        this.cargarDatosGrafico();
    }

    render() {
        return (
            <div className="fondo">
                <div className="container prototipo-container">
                    <div className="row d-flex justify-content-center justify-content-md-between">
                        <div className="col-11 col-md-4 data-card d-flex flex-column align-items-center justify-content-between">
                            <p className="titulo-prototipo">{this.state.nombre}</p>
                            <img className="img-prototipo" src={`/producto/sacar_imagen/${this.state.imagen}`} />
                            <Link to="/dashboard/alimentador/configuracion" className="btn btn-primary btn-config">Configurar</Link>
                        </div>
                        <div className="data-card col-11 col-md-7">
                            <AlimentadorChart datos={this.state.datos} />
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
                                <button className="btn btn-primary btn-servir" onClick={() => this.servir()}>Servir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
