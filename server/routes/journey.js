const express = require('express')
const router = express.Router()
const Timeline = require('../models/journey')
//Get timeliness
router.get('/',  async (req, res) => {
    try{
        const timelines =  await Timeline.find();
        res.json(timelines)
    }catch(err){
        res.status(500).json({message: err.message});
    }
   
})

router.get('/:id' , (req, res) => {
    res.send(req.params.id)
})

router.post('')

module.exports = router