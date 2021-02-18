import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="contenedor-dashboard">
                <div className="menu-dash">
                    <ul>
                        <li><a className="icon icon-home" href="#"></a></li>
                    </ul>
                    <ul>
                        <li><a className="icon icon-clock"></a></li>
                        <li><a className="icon icon-sign-out"></a></li>
                        <li><a className="icon icon-paw"></a></li>
                    </ul>
                    <ul>
                        <li><a className="icon icon-logout"></a></li>
                    </ul>
                </div>
                <div className="dash-contenido">
                    <div className="barra-dash">
                        <img src={this.props.imagenes.logo} className="logo-dash"></img>
                        <div className="seccion-usuario">
                            <img src={this.props.imagenes.usuario} className="usuario-dash"></img>
                            <p>Nombre Usuario</p>
                        </div>
                    </div>
                    <div className="main-contenido">
                        <div className="bienvenida-usuario">
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

                        <div className="productos-dash">
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
