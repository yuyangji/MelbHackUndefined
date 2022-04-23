const Journey = require("../models/journey");

//Middleware function to get journey.
const getJourney = async (req, res, next) => {
  let journey;
  try {
    journey = await Journey.findById(req.params.id);
    if (journey == null) {
      return res.status(404).json({ message: "Cannot find journey" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.journey = journey;
  next();
};

//Get all journeys, limit to 20.
const getAllJourneys = async (req, res) => {
  try {
    const journeys = await Journey.find().limit(20);
    res.json(journeys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Create a journey
const createJourney = async (req, res) => {
  //Get user id from cookie session
  let user_id = req.session.user_id;
  //no user id, then you cannot create.
  if (!user_id) {
    return res.status(403).send("not logged in");
  }
  //create a new journey
  const journey = new Journey({
    title: req.body.title,
    author_id: user_id,
    author_name:req.session.username,
    milestones: req.body.milestones,
  });
  try {
    //Try saving journey to mongo db.
    const newJourney = await journey.save();

    return res.status(201).json(newJourney);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

//getJourney middleware is called before this. so req has journey.
const updateJourney = async (req, res) => {
//Check if author id of journey is the same as logged in id.

//  if (typeof(req.journey.author_id) == 'undefined'|| req.journey.author_id != req.session.user_id) {
//    return res.status(400).json({ message: "You cannot edit this journey" });
//  }
//obtain values from request, and assign.
  if (req.body.title != null) {
    res.journey.title = req.body.title;
  }
  if (req.body.milestones != null) {
    res.journey.milestones = req.body.milestones;
  }

  try {
    const updatedJourney = await res.journey.save();
    res.json(updatedJourney);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteJourney = async (req, res) => {
  try {
    await res.journey.remove();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




module.exports = {
  getAllJourneys,
  createJourney,
  updateJourney,
  deleteJourney,
  getJourney,
};
