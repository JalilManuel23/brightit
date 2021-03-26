import React, { Component } from 'react'
import './Cuenta.css';

export default class Cuenta extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex flex-column align-items-center">
                    <img className="img-user-e" src={this.props.imagenes.userMale} alt="usuario" />
                    <div className="datos-user-e mt-3">
                        <p className="nombre-user-e">{this.props.usuario}</p>
                    </div>
                </div>
                <form className="mt-4">
                    <div class="form-row d-flex justify-content-around">
                        <div class="form-group col-md-5">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="inputEmail4">Contraseña</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Ver</button>
                                </div>
                                <input type="password" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            </div>
                        </div>
                    </div>
                    <div class="form-row d-flex justify-content-around">
                        <div class="form-group col-md-5">
                            <label for="inputEmail4">Usuario</label>
                            <input type="text" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" class="btn btn-light btn-auto">Guardar Cambios</button>
                    </div>
                </form>
            </div>
        )
    }
}
