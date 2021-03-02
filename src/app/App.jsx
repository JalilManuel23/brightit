import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';

import imagenes from './assets/imagenes';
import icons from './assets/Icons/Icons';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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

class App extends Component {
  render() {
    return <div>
      <Router>
        <Route exact path="/" render={() => {
            return <div>
              <Navbar imagenes = { imagenes } />
            	<Home imagenes = { imagenes }/>
              <Footer imagenes = { imagenes } icons = { icons } />
            </div>
          }}>
        </Route>
        <Route exact path="/contacto" render={() => {
            return <div>
              <Navbar imagenes = { imagenes } />
            	<Contacto imagenes = {imagenes} />
              <Footer imagenes = { imagenes } icons = { icons } />
            </div>
          }}>
        </Route>
        <Route exact path="/nosotros" render={() => {
            return <div>
              <Navbar imagenes = { imagenes } />
            	<Nosotros imagenes = {imagenes} />
              <Footer imagenes = { imagenes } icons = { icons } />
            </div>
          }}>
        </Route>
        <Route exact path="/login" render={() => {
            return <div>
              <Login imagenes={imagenes}/>
            </div>
          }}>
        </Route>
        <Route exact path="/crear_cuenta" render={() => {
            return <div>
              <CrearCuenta imagenes={imagenes}/>
            </div>
          }}>
        </Route>
        <Route exact path="/productos" render={() => {
            return <div>
              <Navbar imagenes = { imagenes } />
              <Productos imagenes= { imagenes }/>
              <Footer imagenes = { imagenes } icons = { icons } />
            </div>
          }}>
        </Route>
        <Route exact path="/producto" render={() => {
            return <div>
              <Navbar imagenes = { imagenes } />
              <Producto imagenes={imagenes}/>
              <Footer imagenes = { imagenes } icons = { icons } />
            </div>
          }}>
        </Route>
        <Route exact path="/dashboard" render={() => {
            return <div>
              <Dashboard imagenes={imagenes} icons = { icons } />
            </div>
          }}>
        </Route>
      </Router>
    </div>
  }
}
export default App;