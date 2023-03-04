// dependencies
const express = require('express');
const mongoose = require('mongoose');


//app
const app = express();

//configure settings
require('dotenv').config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;


//connection to mongodb
mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDb')
})
db.on('error', (error) => {
    console.log('Error occured with MongoDb' + error.message)
});




//middleware


// routes
app.get('/', (req, res) => {
    res.json({
        response: 'hello'
    })
});


// app listen
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`)
});