const express = require('express')
const Hotel = require('./../db/models/hotel');

const router = new express.Router();

// GET DE HOTEL PARA OBTENER
router.get('/api/hotels', async (req, res) => {    
    try {
        const hotels =  await Hotel.find({})
        res.render('hotels', { hotels })
        //res.send(hoteles)
        console.log(hotels)        

    } catch (error) {
        res.status(500).send({
            message: 'Error inesperado'
        })
    }
    
});

// POST DE HOTEL PARA ENVIAR
router.post('/api/hotels', async (req, res) => {    
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
router.get('/api/hotels/:id', async (req, res) => {   
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