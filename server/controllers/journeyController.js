const Journey = require("../models/journey");

const getAllJourneys = async (req, res) => {
  try {
    const journeys = await Journey.find().limit(20);
    res.json(journeys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createJourney = async (req, res) => {
  let user_id = req.session.user_id;

  if(!user_id){
    return res.status(403).send("not logged in");
  }

  const journey = new Journey({
    title: req.body.title,
    author_id: user_id,
    milestones: req.body.milestones,
  });
  try {
    const newJourney = await journey.save();
    res.status(201).json(newJourney);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateJourney = async (req, res) => {
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
};
