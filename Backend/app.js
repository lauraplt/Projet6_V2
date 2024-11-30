require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/user');


const app = express();

//CORS
app.use(cors({
    origin: '*', // À ajuster selon vos besoins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content', 'Accept', 'Content-Type', 'Authorization']
}));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((error) => console.log('Connexion à MongoDB échouée !', error));

app.use(express.json());
app.use('/api/auth', userRoutes);



module.exports = app;