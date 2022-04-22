const express = require('express')
const router = express.Router()
const Journey = require('../models/journey')
const authenticate = require('../middleware/authenticate')


//Get all journeys
router.get('/', authenticate, async (req, res) => {
    try{
        const journeys =  await Journey.find().limit(20);
        res.json(journeys)
    }catch(err){
        res.status(500).json({message: err.message});
    }
   
})

//Get one journey
router.get('/:id' ,getJourney, (req, res) => {
    res.send(res.journey)
})


//Create a journey
router.post('/', async (req,res) => {
    const journey = new Journey({
        title : req.body.title,
        milestones : req.body.milestones
    })
    try {
    const newJourney = await journey.save()
    res.status(201).json(newJourney)
    }catch(err){
        res.status(400).json({message: err.message});
    }

})

//Updating a journey
router.patch('/:id',  getJourney, async (req, res) => {
    if(req.body.title != null){
        res.journey.title = req.body.title
    }
    if(req.body.milestones != null){
        res.journey.milestones = req.body.milestones
    }
    try{
        const updatedJourney = await res.journey.save()
        res.json(updatedJourney)
    }catch(err){
        res.status(400).json({message:err.message })
    }

})


//Delete a journey
router.delete('/:id', getJourney, async (req, res) => {
    try{
        await res.journey.remove()
        res.json({message: 'Deleted'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})


async function getJourney(req, res, next){
    let journey
    try{
        journey = await Journey.findById(req.params.id)
        if(journey == null){
            return res.status(404).json({message: "Cannot find journey"})
        }
    }catch(err){
      return res.status(500).json({message: err.message});
    }
    res.journey = journey;
    next()
}

module.exports = router