const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')


router.get('/myJourneys', UserController.getMyJourneys)

router.get('/', UserController.getUser)


router.patch('/saveJourney/:id', UserController.saveJourney)


module.exports = router