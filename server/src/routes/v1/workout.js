import express from "express";

import {
    getWorkout, createWorkoutForm
} from "../../controllers/workout.js";

const router = express.Router();

// GET goals
router.get("/", getWorkout);
// create goal
router.post("/", createWorkoutForm);

export default router;