const express = require('express')

const router = new express.Router();


// RUTA DE INDEX
router.get('/', (req, res) => {    
    res.render('index')
});


// RUTA DE CONTACT
router.get('/contact', (req, res) => {    
    res.render('contact')
});


// RUTA DE AGREGAR HOTELES
router.get('/add-hotel', (req, res) => {    
    res.render('add-hotel')
});

// RUTA DE MOSTAR TODOS LOS HOTELES
router.get('/hotels', (req, res) => {    
    res.render('hotels')
});



module.exports = router;