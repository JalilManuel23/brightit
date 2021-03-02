import React, { Component } from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default class CrearCuenta extends Component {

    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
            password:''
        };
        this.agregarUsuario = this.agregarUsuario.bind(this);
        this.manejador = this.manejador.bind(this);
    }

    manejador(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    agregarUsuario(e)  {
        e.preventDefault();
       
        fetch('/usuarios/crear_cuenta', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(this.state), // data can be `string` or {object}!
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json();
        
            if(res.status == 200) {
                Swal.fire(
                    'Usuario creado correctamente',
                    'Da click para continuar',
                    'success'
                );
            } else {
                Swal.fire(
                    'Ya hay una cuenta vinculada a este email',
                    'Vuelve a intentarlo con otro email',
                    'warning'
                );
            }
        })
        .catch(error => console.error('Error:', error))
    }

    render() {
        return (
            <div className="contenedor-login d-flex justify-content-center align-items-center">
                <form className="form-login form-reg d-flex flex-column align-items-center" onSubmit={this.agregarUsuario}>
                    <img src={this.props.imagenes.logo}></img>
                    <p>Ingresa tus datos para crear una cuenta</p>
                    <input name="name" type="text" placeholder="Usuario" value={this.state.user} onChange={this.manejador}></input>
                    <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.manejador}></input>
                    <input name="password" type="password" placeholder="Contraseña" value={this.state.password} onChange={this.manejador}></input>
                    <input name="confirm-pass" type="password" placeholder="Confirmar contraseña"></input>
                    <input type="submit" className="btn btn-primary m-3" value="Crear Cuenta"></input>
                </form>
            </div>
        )
    }
}