// dependencies
const express = require('express');
const mongoose = require('mongoose');
const Jobs = require('./models/job')
const methodOverride = require('method-override')

//app
const app = express();

//configure settings
require('dotenv').config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const jobsRouter = require('./controllers/hiresController')


//connection to mongodb
mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL);

mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(`MongoDB Error: ${error.message}`));

//middleware
app.use(express.json())

// routes

// test route
app.get('/', (req, res) => {
    res.json({
        response: 'hello'
    })
});

app.use(jobsRouter)
// index route

// app listen
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`)
});
