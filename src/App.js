import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import imagenes from './assets/imagenes';

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
      </Router>
    </div>
  }
}
export default App;
