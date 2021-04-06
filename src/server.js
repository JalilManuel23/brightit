const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


// Starting
const app = express();
require('./config/passport');

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(session({
     secret: 'secret',
     resave: true,
     saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(bodyParser.urlencoded({extended: false}));


// Global variables
app.use((req, res, next) => {
     next();
});

// Routes
app.use(require('./routes/users.routes'));
app.use(require('./routes/alimentador.routes'));
app.use(require('./routes/alarma.routes'));
app.use(require('./routes/cerradura.routes'));
app.use(require('./routes/empleados.routes'));
app.use(require('./routes/compra.routes'));

// Static Files
app.use(express.static(path.join(__dirname,'public')));


// 

const publicPath = path.join(__dirname,'public');

app.get('*', (req, res) => {    
     res.sendFile(path.join(publicPath, 'index.html')), function(err) {             
     if (err) {                 
          res.status(500).send(err) 
          }        
     };
});

// 

module.exports = app;