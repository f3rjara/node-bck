const express = require('express')

const router = new express.Router();


// RUTA DE INDEX
router.get('/', (req, res) => {    
    res.render('index')
});


module.exports = router;