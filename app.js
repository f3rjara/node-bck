const express = require('express');
const app = express();

app.use(express.static('assets'));
app.set('view engine','ejs');

app.get('/', (req, res) => {    
    res.render('index')
});

// Ruta por defecto
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404')
});

app.listen(5500, () => {
    console.log("listening port")
});
