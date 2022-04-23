const express = require('express')
const router = express.Router()
const Journey = require('../models/journey')
const {authenticate} = require('../middleware/authenticate')
const JourneyController = require('../controllers/journeyController')

//Get all journeys
router.get('/',  JourneyController.getAllJourneys)

//Get one journey
router.get('/:id' ,JourneyController.getJourney, (req, res) => {
    res.send(res.journey)
})


//Create a journey
router.post('/', authenticate, JourneyController.createJourney)

//Updating a journey
router.patch('/:id', [authenticate, JourneyController.getJourney], JourneyController.updateJourney )


//Delete a journey
router.delete('/:id', JourneyController.getJourney, JourneyController.deleteJourney)


router.get('/search', JourneyController.searchJourney)

module.exports = router