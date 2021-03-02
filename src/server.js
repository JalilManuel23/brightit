const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');


// Starting
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000},
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
// app.use(bodyParser.urlencoded({extended: false}));


// Global variables

// Routes
app.use(require('./routes/users.routes'));
app.use(require('./routes/alimentador.routes'));
app.use(require('./routes/alarma.routes'));
app.use(require('./routes/cerradura.routes'));
app.use(require('./routes/empleados.routes'));

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