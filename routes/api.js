const express = require('express')
const Hotel = require('./../db/models/hotel');

const router = new express.Router();

// GET DE HOTEL PARA OBTENER
router.get('/api/hoteles', async (req, res) => {    
    try {
        const hoteles =  await Hotel.find({})
        res.send(hoteles)
    } catch (error) {
        res.status(500).send({
            message: 'Error inesperado'
        })
    }
    
});

// POST DE HOTEL PARA ENVIAR
router.post('/api/hoteles', async (req, res) => {    
    try {
        const dataHotel = req.body
        console.log(dataHotel)
        const hotel =  new Hotel(dataHotel)
        await hotel.save()
        res.send(hotel)
    } catch (error) {
        res.status(400).send(error);
    }
    
});



// POST DE HOTEL PARA MOSTRAR UN HOTEL
router.get('/api/hoteles/:id', async (req, res) => {    
    
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