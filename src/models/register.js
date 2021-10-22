const mongoose = require('mongoose');
const { Schema } = mongoose;

const registerShema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Register', registerShema);