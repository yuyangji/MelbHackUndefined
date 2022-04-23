const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')


router.get('/savedJourneys', UserController.getSavedJourneys)

router.get('/', UserController.getUser)


router.patch('/saveJourney/:id', UserController.saveJourney)


module.exports = router