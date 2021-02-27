import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';

import imagenes from './assets/imagenes';
import icons from './components/Icons/Icons';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/LoginRegistro/Login';
import CrearCuenta from './components/LoginRegistro/CrearCuenta';
import Footer from './components/Footer/Footer';
import Productos from './components/Productos/Productos';
import Producto from './components/Productos/Producto/Producto';
// import Dashboard from './components/Dashboard.js';

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
              {/* <Dashboard imagenes={imagenes}/> */}
            </div>
          }}>
        </Route>
      </Router>
    </div>
  }
}
export default App;