// dependencies
const express = require('express')


//app
const app = express()

//configure settings
require('dotenv').config()
const PORT = process.env.PORT


//connection to mongodb


//middleware


// routes
app.get('/', (req, res) => {
    res.json({
        response: 'hello'
    })
})


// app listen
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`)
})

