const express = require('express');
const router = express.Router()
const Jobs = require('../models/job')


// index route
router.get("/hires", async (req, res) => {
    try {
      res.status(200).json(await Jobs.find({}));
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: "something went wrong" });
    }
  });

  // delete route

  router.delete('/:id', async(req, res) => {
    try {
      res.status(200).json(await Jobs.findByIdAndDelete(req.params.id))
    } catch (error) {
      res.status(400).json({message: 'something went wrong'})
    }
  });

  // update route

  router.put('/:id', async (req, res) => {
    try {
      res.status(200).json(
        await Jobs.findByIdAndUpdate(req.params.id, req.body, { new: true})
      );
    } catch(eror) {
      res.status(400).json ({message: 'something went wrong'})
    }
  })
  
  // create route
  router.post('/jobs', async (req, res) => {
    try {
        res.status(200).json(await Jobs.create(req.body))
    } catch (error) {
        res.status(400).json({message: 'something went wrong'})
    }
});

module.exports = router;