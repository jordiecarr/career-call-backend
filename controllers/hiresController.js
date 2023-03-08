const express = require('express');
const router = express.Router()
const Jobs = require('../models/job')

// index route
router.get("/hires", async (req, res) => {
    try {
      res.status(200).json(await Jobs.find({}));
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    }
  });

  // post route
  router.post('/jobs', async (req, res) => {
    try {
        res.status(201).json(await Jobs.create(req.body))
    } catch (error) {
        res.status(400).json({message: 'something went wrong'})
    }
})



module.exports = router;