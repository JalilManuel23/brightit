import React, { Component } from 'react'

import '../Prototipos.css';

export default class Cerradura extends Component {
    render() {
        return (
            <div className="container prototipo-container">
                <div className="row d-flex justify-content-center justify-content-md-between">
                    <div className="data-card col-11 col-md-4 d-flex flex-column align-items-center">
                        <p className="titulo-prototipo">Cerradura</p>
                        <img className="img-prototipo" src={this.props.imagenes.cerradura} />
                    </div>
                    <div className="data-card col-11 col-md-7">
                        2
                    </div>
                </div>
                <div className="row d-flex justify-content-center justify-content-md-between">
                    <div className="data-card col-11 col-md-6">
                        1
                    </div>
                    <div className="data-card col-11 col-md-5">
                        2
                    </div>
                </div>
            </div>
        )
    }
}
