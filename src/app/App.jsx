import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';

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
import Alarma from './components/Dashboard/Prototipos/Alarma/Alarma';
import Cerradura from './components/Dashboard/Prototipos/Cerradura/Cerradura';
import Alimentador from './components/Dashboard/Prototipos/Alimentador/Alimentador';
import ConfiguracionAlimentador from './components/Dashboard/Prototipos/Alimentador/ConfiguracionAlimentador';
import ConfiguracionCerradura from './components/Dashboard/Prototipos/Cerradura/ConfiguracionCerradura';
import AlimentadorChart from './components/Charts/AlimentadorChart';
import CerraduraChart from './components/Charts/CerraduraChart';
import AlarmaChart from './components/Charts/AlarmaChart';
import ConfiguracionAlarma from './components/Dashboard/Prototipos/Alarma/ConfiguracionAlarma';
import Cuenta from './components/Dashboard/Cuenta/Cuenta';
import Redireccion from './components/Dashboard/Prototipos/Alimentador/Redireccion';

class App extends Component {

  constructor() {
    super();

    this.state = {
      carrito: [],
      subtotal: 0,
      logged: false,
      usuario: null,
      idUsuario: null
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
        this.setState({ usuario: null });
      }
    });
  }

  handleLogged() {
    this.setState({ logged: !this.state.logged });
    console.log(this.state.logged);
  }

  handleUsuario(nombre, idUsuario) {
    this.setState({ usuario: nombre, idUsuario: idUsuario });
  }

  render() {
    return <div>
      <Router history={history}>
        <Route exact path="/" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} usuario={this.state.usuario} />
            <Home/>
            <Footer/>
          </div>
        }}>
        </Route>
        <Route exact path="/contacto" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} usuario={this.state.usuario} />
            <Contacto/>
            <Footer/>
          </div>
        }}>
        </Route>
        <Route exact path="/nosotros" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} usuario={this.state.usuario} />
            <Nosotros/>
            <Footer/>
          </div>
        }}>
        </Route>
        <Route exact path="/login" render={() => {
          return <div>
            <Login handleLogged={this.handleLogged} handleUsuario={this.handleUsuario} />
          </div>
        }}>
        </Route>
        <Route exact path="/crear_cuenta" render={() => {
          return <div>
            <CrearCuenta/>
          </div>
        }}>
        </Route>
        <Route exact path="/productos" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} usuario={this.state.usuario} />
            <Productos handleCarrito={ this.handleCarrito } sumarSubtotal={ this.sumarSubtotal } />
            <Carrito productosCarrito={ this.state.carrito } subtotal={ this.state.subtotal } eliminarProducto={ this.eliminarProducto } />
            <Footer/>
          </div>
        }}>
        </Route>
        <Route exact path="/producto/:id" render={({ match }) => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} usuario={this.state.usuario} />
            <Producto match={match} handleCarrito={this.handleCarrito} sumarSubtotal={this.sumarSubtotal} />
            <Carrito productosCarrito={this.state.carrito}
              subtotal={this.state.subtotal} eliminarProducto={this.eliminarProducto} />
            <Footer/>
          </div>
        }}>
        </Route>
        <Route exact path="/confirmar_compra" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} usuario={this.state.usuario} />
            <ConfirmarCompra productosCarrito={this.state.carrito} eliminarProducto={this.eliminarProducto}
              subtotal={this.state.subtotal} />
            <Footer/>
          </div>
        }}>
        </Route>
        <Route exact path="/dashboard" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} dash={true} usuario={this.state.usuario} />
            <Dashboard usuario={this.state.usuario} />
          </div>
        }}>
        </Route>
        <Route exact path="/opciones" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} dash={true} usuario={this.state.usuario} />
            <Opciones usuario={this.state.usuario}/>
          </div>
        }}>
        </Route>
        <Route exact path="/dashboard/alarma" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} dash={true}  usuario={this.state.usuario} />
            <Alarma usuario={this.state.usuario}/>
          </div>
        }}>
        </Route>
        <Route exact path="/dashboard/cerradura" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} dash={true} usuario={this.state.usuario} />
            <Cerradura usuario={this.state.usuario}/>
          </div>
        }}>
        </Route>
        <Route exact path="/dashboard/alimentador" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} dash={true} usuario={this.state.usuario} />
            <Alimentador usuario={this.state.usuario}/>
          </div>
        }}>
        </Route>
        <Route exact path="/dashboard/alarma/configuracion" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} dash={true} usuario={this.state.usuario} />
            <ConfiguracionAlarma usuario={this.state.usuario}/>
          </div>
        }}>
        </Route>
        <Route exact path="/dashboard/alimentador/configuracion" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} dash={true} usuario={this.state.usuario} />
            <ConfiguracionAlimentador usuario={this.state.usuario}/>
          </div>
        }}>
        </Route>
        <Route exact path="/dashboard/cerradura/configuracion" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} dash={true} usuario={this.state.usuario} />
            <ConfiguracionCerradura usuario={this.state.usuario}/>
          </div>
        }}>
        </Route>
        <Route exact path="/cuenta" render={() => {
          return <div>
            <Navbar handleLogged={this.handleLogged} logged={this.state.logged} dash={true} usuario={this.state.usuario} />
            <Cuenta usuario={this.state.idUsuario} />
          </div>
        }}>
        </Route>
        <Route exact path="/redirect" render={() => {
          return <div>
            <Redireccion/>
          </div>
        }}>
        </Route>
      </Router>
    </div>
  }
}
export default App;