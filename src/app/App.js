import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'material-icons/iconfont/material-icons.css';
import './App.css';

import imagenes from './assets/imagenes';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
// import Login from './components/Login.js';
// import CrearCuenta from './components/CrearCuenta.js';

import Productos from './components/Home/Productos/Productos.js';
// import Producto from './components/Producto.js';
// import Dashboard from './components/Dashboard.js';

class App extends Component {
  render() {
    return <div>
      <Router>
        <Navbar imagenes = { imagenes } />
        <Route exact path="/" render={() => {
            return <div>
            	<Home imagenes = { imagenes }/>
            </div>
          }}>
        </Route>
        <Route exact path="/login" render={() => {
            return <div>
              {/* <Login imagenes={imagenes}/> */}
            </div>
          }}>
        </Route>
        <Route exact path="/crear_cuenta" render={() => {
            return <div>
              {/* <CrearCuenta imagenes={imagenes}/> */}
            </div>
          }}>
        </Route>
        <Route exact path="/productos" render={() => {
            return <div>
              <Productos imagenes= { imagenes }/>
            </div>
          }}>
        </Route>
        <Route exact path="/producto" render={() => {
            return <div>
              {/* <Producto imagenes={imagenes}/> */}
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