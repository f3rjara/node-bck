require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const viewsRoutes = require('./routes/views');
const apiRoutes = require('./routes/api');


const app = express();

app.use(express.static('assets'));
app.use(express.json());
app.set('view engine','ejs');

app.use(viewsRoutes);
app.use(apiRoutes);

// Ruta por defecto de error 4040
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404')
});

// CONEXION A MONGO DB POR MONGO COMPAS
mongoose.connect(process.env.MONGIDB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database connected');
    console.log('------------------');
})

.catch((error) => {
    console.log('Database connection failed');
    console.log(error);
});

app.listen(process.env.PORT, () => console.log("listening port"));
