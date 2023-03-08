// dependencies
const express = require('express');
const mongoose = require('mongoose');
const Jobs = require('./models/job')

//app
const app = express();

//configure settings
require('dotenv').config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;


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

// index route
app.get("/jobs", async (req, res) => {
    try {
      res.status(200).json(await Jobs.find({}));
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    }
  });

//create route
app.post('/jobs', async (req, res) => {
    try {
        res.status(201).json(await Jobs.create(req.body))
    } catch (error) {
        res.status(400).json({message: 'something went wrong'})
    }
})

// app listen
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`)
});
