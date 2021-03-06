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

import producto from './sample/productos';

class App extends Component {
  render() {
    return <div>
      <Router history={history}>
        <Route exact path="/" render={() => {
          return <div>
            <Navbar imagenes={imagenes} />
            <Home imagenes={imagenes} />
            <Footer imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/contacto" render={() => {
          return <div>
            <Navbar imagenes={imagenes} />
            <Contacto imagenes={imagenes} />
            <Footer imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/nosotros" render={() => {
          return <div>
            <Navbar imagenes={imagenes} />
            <Nosotros imagenes={imagenes} />
            <Footer imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/login" render={() => {
          return <div>
            <Login imagenes={imagenes} />
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
            <Navbar imagenes={imagenes} />
            <Productos imagenes={imagenes} icons={icons} />
            <Carrito imagenes={imagenes} icons={icons} />
            <Footer imagenes={imagenes} icons={icons} />
          </div>
        }}>
        </Route>
        <Route exact path="/producto/:id" render={({match}) => {
          return <div>
            <Navbar imagenes={imagenes} />
            <Producto
              imagenes={imagenes}
              // key={producto.id}
              // nombre={producto.nombre}
              // descripcion={producto.descripcion}
              // precio={producto.precio}
              // imagen={producto.imagen}
              match={match}
            />
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
      </Router>
    </div>
  }
}
export default App;