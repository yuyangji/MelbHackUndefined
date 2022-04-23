const User = require("../models/user");
const Journey = require("../models/journey")


const getSavedJourneys = async (req, res) => {
  let user_id = req.session.user_id;
  if (user_id) {
    try {
      const user = await User.findOne({ _id: user_id });
      res.json(user.saved_journeys);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  } else {
    return res.status(500).json({ message: "You are not logged in" });
  }
};

const getUser = async (req, res) => {
  let user_id = req.session.user_id;
  if (user_id) {
    try {
      const user = await User.findOne({ _id: user_id });
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(500).json({ message: "You are not logged in" });
  }
};

const saveJourney = async (req, res) => {
  let user_id = req.session.user_id;
  if (user_id) {
    try {
      const user = await User.findOne({ _id: user_id });
      const journey = await Journey.findById(req.params.id);
      if (user && journey) {
        user.saved_journeys.push(journey._id);
        const updatedUser = await user.save();
        return res.status(200).json(updatedUser);
      }else{
        return res.status(400).json({ message: "something went wrong"});
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(500).json({ message: "You are not logged in" });
  }
};

module.exports = { getSavedJourneys, getUser, saveJourney };
