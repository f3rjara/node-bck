const mongoose = require('mongoose')

const  hotelSchema  =  new mongoose.Schema ( {
    "nombre" : {
        type: String,
        require: true,
        trim: true
    },
    "estrellas": {
        type: Number,
        require: true
    },
    "ciudad" : {
        type: String,
        require: true,
        trim: true
    }
})

module.exports = hotelSchema