const mongoose = require('mongoose')

const  hotelSchema  =  new mongoose.Schema ( {
    "nombre" : {
        type: String,
        require: true,
        trim: true
    },
    "ciudad" : {
        type: String,
        require: true,
        trim: true
    },
    "direccion" : {
        type: String,
        require: true,
        trim: true
    },
    "long" : {
        type: String,
        require: true,
        trim: true
    },
    "lat" : {
        type: String,
        require: true,
        trim: true
    },
    "estrellas": {
        type: Number,
        require: true
    },
    "short_desc" : {
        type: String,
        require: true,
        trim: true
    },
    "long_desc" : {
        type: String,
        require: true,
        trim: true
    },
    "ruta_foto" : {
        type: String,
        require: true,
        trim: true
    }
})

module.exports = hotelSchema