const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter workout type: resistance or cardio",

            },
            name: {
                type: String,
                trim: true,
                required: "Exercise"
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        }]
});

workoutSchema.methods.totalDuration = function () {
    this.totalDuration = `${this.exercises.forEach()}`
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;