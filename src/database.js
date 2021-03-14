const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;

mongoose.connect('mongodb://localhost:27017/api_restb', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(
    db => console.log('Database is connected')
).catch(
    err => console.log(err)
);