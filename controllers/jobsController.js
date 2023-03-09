 const express = require('express');
 const router = express.Router()
 const Jobs = require('../models/job')
 const methodOverride = require('method-override');

 //middleware
 app.use(methodOverride('_method'));

 // index route
 router.get("/jobs", async (req, res) => {
     try {
      res.status(200).json(await Jobs.find({}));
     } catch (error) {
      res.status(400).json({ message: "something went wrong" });
     }
   });

//   post route
  router.post('/jobs', async (req, res) => {
    try {
       res.status(201).json(await Jobs.create(req.body))
   } catch (error) {
       res.status(400).json({message: 'something went wrong'})
   }
 });

// delete route
router.delete('/jobs/:id', async (req, res) => {
    try {
      const job = await Jobs.findByIdAndDelete(req.params.id);
      if (!job) {
        res.status(404).json({ message: "Job not found" });
      } else {
        res.status(200).json({ message: "Job deleted successfully" });
      }
    } catch (error) {
      res.status(400).json({ message: "Something went wrong" });
    }
  });
  


 module.exports = router;