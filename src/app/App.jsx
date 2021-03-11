import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';

import imagenes from './assets/imagenes';
import icons from './assets/Icons/Icons';

import { Router, Route, Link } from 'react-router-dom';
import history from './history';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/LoginRegistro/Login';
import CrearCuenta from './components/LoginRegistro/CrearCuenta';
import Footer from './components/Footer/Footer';
import Productos from './components/Productos/Productos';
import Producto from './components/Productos/Producto/Producto';
import Dashboard from './components/Dashboard/Dashboard';
import Contacto from './components/Home/Contacto/Contacto';
import Nosotros from './components/Home/Nosotros/Nosotros';
import Carrito from "./components/Carrito/Carrito";

import productos from './sample/productos';
import ConfirmarCompra from './components/ConfirmarCompra/ConfirmarCompra';
import Opciones from './components/Dashboard/Opciones/Opciones';

class App extends Component {

  constructor() {
    super();

    this.state = {
      carrito: [],
      subtotal: 0,
      logged: false,
      usuario: null
    }

    this.handleCarrito = this.handleCarrito.bind(this);
    this.handleLogged = this.handleLogged.bind(this);
    this.sumarSubtotal = this.sumarSubtotal.bind(this);
    this.eliminarProducto = this.eliminarProducto.bind(this);
    this.handleUsuario = this.handleUsuario.bind(this);
  }

  handleCarrito(producto) {
    const newProducto = {
      id: producto,
      idProducto: this.state.carrito.length
    }
    this.setState({
      carrito: [...this.state.carrito, newProducto]
    })
    console.log(this.state.carrito)
  }

  sumarSubtotal(precio) {
    var subtotal = this.state.subtotal;
    subtotal += precio;
    subtotal = parseFloat(subtotal.toFixed(2));

    this.setState({ subtotal: subtotal });
  }

  eliminarProducto(id, precio) {
    var carrito = this.state.carrito;

    var newCarrito = carrito.filter(producto => producto.idProducto != id);

    var subtotal = this.state.subtotal;

    subtotal -= precio;
    subtotal = parseFloat(subtotal.toFixed(2));

    this.setState({
      carrito: newCarrito,
      subtotal: subtotal
    });
  }
  componentDidMount() {
    this.isLogged();
  }

  isLogged() {
    fetch('/usuarios/is_logged').then(res => {
      if (res.status == 200) {
        this.setState({ logged: true });
      } else {
        this.setState({ logged: false });
        this.setState({usuario: null});
      }
    });
  }

  handleLogged() {
    this.setState({ logged: !this.state.logged });
    console.log(this.state.logged);
  }

  handleUsuario(datos) {
    this.setState({ usuario: datos });
    console.log(this.state.usuario);
  }

  render() {
    return <div>
      <Router history={history}>
        <Route exact path="/" render={() => {
          return <div>
            <Navbar imagenes={imagenes} handleLogged={this.handleLogged} logged={this.state.logged} />
            <Home imagenes={imagenes} />
            <Footer imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/contacto" render={() => {
          return <div>
            <Navbar imagenes={imagenes} handleLogged={this.handleLogged} logged={this.state.logged} />
            <Contacto imagenes={imagenes} />
            <Footer imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/nosotros" render={() => {
          return <div>
            <Navbar imagenes={imagenes} handleLogged={this.handleLogged} logged={this.state.logged} />
            <Nosotros imagenes={imagenes} />
            <Footer imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/login" render={() => {
          return <div>
            <Login imagenes={imagenes} handleLogged={this.handleLogged} handleUsuario={this.handleUsuario} />
          </div>
        }}>
        </Route>
        <Route exact path="/crear_cuenta" render={() => {
          return <div>
            <CrearCuenta imagenes={imagenes} />
          </div>
        }}>
        </Route>
        <Route exact path="/productos" render={() => {
          return <div>
            <Navbar imagenes={imagenes} handleLogged={this.handleLogged} logged={this.state.logged} />
            <Productos imagenes={imagenes} icons={icons} handleCarrito={this.handleCarrito} sumarSubtotal={this.sumarSubtotal} />
            <Carrito imagenes={imagenes} icons={icons} productosCarrito={this.state.carrito}
              subtotal={this.state.subtotal} eliminarProducto={this.eliminarProducto} />
            <Footer imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/producto/:id" render={({ match }) => {
          return <div>
            <Navbar imagenes={imagenes} handleLogged={this.handleLogged} logged={this.state.logged} />
            <Producto imagenes={imagenes} match={match} handleCarrito={this.handleCarrito} sumarSubtotal={this.sumarSubtotal} />
            <Carrito imagenes={imagenes} icons={icons} productosCarrito={this.state.carrito}
              subtotal={this.state.subtotal} eliminarProducto={this.eliminarProducto} />
            <Footer imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/confirmar_compra" render={() => {
          return <div>
            <Navbar imagenes={imagenes} handleLogged={this.handleLogged} logged={this.state.logged} />
            <ConfirmarCompra imagenes={imagenes} icons={icons} productosCarrito={this.state.carrito} eliminarProducto={this.eliminarProducto}
              subtotal={this.state.subtotal} />
            <Footer imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/dashboard" render={() => {
          return <div>
            <Dashboard imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/opciones" render={() => {
          return <div>
            <Navbar imagenes={imagenes} handleLogged={this.handleLogged} logged={this.state.logged} />
            <Opciones imagenes={imagenes} icons={icons}
            usuario={this.state.usuario}
            />
          </div>
        }}>
        </Route>
      </Router>
    </div>
  }
}
export default App;