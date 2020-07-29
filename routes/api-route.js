// const router = require("express").Router();
const Workout = require("../models/workouts.js");

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

  app.post("/api/workouts", (req, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", function (req, res) {
    let exerciseUpdate = req.body
    Workout.update(
      exercises = exerciseUpdate,
      {
        where: {
          _id: req.params.id
        }
      }).then(function (dbPost) {
        res.json(dbPost);
      });
  });

}
// module.exports = router;
