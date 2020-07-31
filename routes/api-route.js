// const router = require("express").Router();
const Workout = require("../models/workouts.js");
const mongojs = require('mongojs')

module.exports = (app) => {

  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(req.body)
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    
    Workout.findByIdAndUpdate(
     {_id: req.params.id }, { $push: { exercises: req.body } }, {new: true})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout)
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

}
// module.exports = router;
