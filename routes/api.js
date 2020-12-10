const express = require('express')
const multer = require('multer')
const path = require('path');
const Hotel = require('./../db/models/hotel');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/img/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) // Agregando la extension
    }
});

const router = new express.Router();
const upload = multer({ storage });

// GET DE HOTEL PARA OBTENER
router.get('/api/hotels', async (req, res) => {    
    try {
        const hotels =  await Hotel.find({})
        res.send(hotels)
    } catch (error) {
        res.status(500).send({
            message: 'Error inesperado'
        })
    }
});

// POST DE HOTEL PARA ENVIAR
router.post('/api/hotels', upload.single('ruta_foto'), async (req, res) => {    
    try {
        const dataHotel = req.body
        const foto = req.file;

        const dataResult = {
            'nombre': dataHotel.nombre,
            'ciudad': dataHotel.ciudad,
            'direccion': dataHotel.direccion,
            'long': dataHotel.long,
            'lat': dataHotel.lat,
            'estrellas': dataHotel.estrellas,
            'short_desc': dataHotel.short_desc,
            'long_desc': dataHotel.long_desc,
            'ruta_foto': foto.path,
        }
        console.log(dataResult)
        
        const hotel =  new Hotel( dataHotel )
        await hotel.save()  
        res.send({
            message: 'Success!'
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
    
});


// POST DE HOTEL PARA MOSTRAR UN HOTEL
router.get('/api/hotel/:id', async (req, res) => {   
    try {
        const id = req.params.id;
        const hotel =  await Hotel.findById(id)        
        if( !hotel ){
            res.status(404).send();
        }
        else {
            res.send(hotel)
        }
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;