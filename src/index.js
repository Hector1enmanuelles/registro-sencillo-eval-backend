const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require("dotenv").config();

const registersRoutes = require('./routes/registers');



// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 3000);

// mongodb conexion
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error(error));

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
//app.use('/', indexRoutes);
app.use(express.json());
app.use('/api', registersRoutes);


// start the server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});

