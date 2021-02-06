import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import CrearCuenta from './components/CrearCuenta.js';
import imagenes from './assets/imagenes';
import Productos from './components/Productos.js';
import Producto from './components/Producto.js';

class App extends Component {
  render() {
    return <div>
      <Router>
        <Route exact path="/" render={() => {
            return <div>
              <Home imagenes={imagenes}/>
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
              <Productos imagenes={imagenes}/>
            </div>
          }}>
        </Route>
        <Route exact path="/producto" render={() => {
            return <div>
              <Producto imagenes={imagenes}/>
            </div>
          }}>
        </Route>
      </Router>
    </div>
  }
}
export default App;
