import React, { Component } from 'react'

import './Dashboard.css'

import Menu from './Menu/Menu'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="d-flex">
                <Menu icons={ this.props.icons } />
                <div className="dash-contenido">
                    <div className="barra-dash d-flex align-items-center justify-content-between">
                        <img src={this.props.imagenes.logo} className="logo-dash"></img>
                        <div className="seccion-usuario d-flex align-items-center">
                            <img src={this.props.imagenes.usuario} className="usuario-dash"></img>
                            <p>Nombre Usuario</p>
                        </div>
                    </div>
                    <div className="main-contenido d-flex flex-column align-items-center justify-content-around">
                        <div className="bienvenida-usuario d-flex justify-content-between">
                            <div>
                                <h4>¡Hola,usuario!</h4>
                                <p>
                                Administra tus dispositivos inteligentes
                                mira las estadisitcas de y realiza 
                                configuraciones en tu cuenta.
                                </p>
                            </div>
                            <img className="girl-flat" src={this.props.imagenes.girl}></img>
                        </div>

                        <div className="productos-dash d-flex justify-content-around">
                            <div className="producto-dash">
                                <p className="icon icon-clock"></p>
                                <p>Alarma Antirrobo</p>
                            </div>
                            <div className="producto-dash">
                                <p className="icon icon-sign-out"></p>
                                <p>Puerta Segura</p>
                            </div>
                            <div className="producto-dash">
                                <p className="icon icon-paw"></p>
                                <p>Alimentador de mascotas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
