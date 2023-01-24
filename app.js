const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/register');
const userRoutes = require('./routes/intervention');

const app = express();

mongoose.connect('mongodb+srv://vincent:HyDD3N77@cluster0.fhsjkn0.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/register',stuffRoutes);
app.use('/api/intervention',userRoutes);

module.exports = app;