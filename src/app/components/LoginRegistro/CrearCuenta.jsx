import React from 'react'

export default function CrearCuenta(props) {
    return (
        <div className="contenedor-login d-flex justify-content-center align-items-center">
            <form className="form-login form-reg d-flex flex-column align-items-center">
                <img src={props.imagenes.logo}></img>
                <p>Ingresa tus datos para crear una cuenta</p>
                <input type="text" placeholder="Usuario"></input>
                <input type="password" placeholder="Contraseña"></input>
                <input type="password" placeholder="Confirmar contraseña"></input>
                <input type="submit" className="btn btn-primary m-3" value="Crear Cuenta"></input>
            </form>
        </div>
    )
}
