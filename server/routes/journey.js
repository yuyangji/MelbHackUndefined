const express = require('express')
const router = express.Router()
const Journey = require('../models/journey')
const {authenticate} = require('../middleware/authenticate')
const JourneyController = require('../controllers/journeyController')

//Get all journeys
router.get('/',  JourneyController.getAllJourneys)

//Get one journey
router.get('/:id' ,getJourney, (req, res) => {
    res.send(res.journey)
})


//Create a journey
router.post('/', authenticate, JourneyController.createJourney)

//Updating a journey
router.patch('/:id', authenticate, getJourney,JourneyController.updateJourney )


//Delete a journey
router.delete('/:id', getJourney, JourneyController.deleteJourney)


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