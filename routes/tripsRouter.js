const express = require("express");
const tripsRouter = express.Router();
const { getAllTrips, getTripByTruckId, getTripById, createTrip, sendTrips, sendTrip } = require("../controllers/trips-controller");
const { getTruckIdByPlate, createTruck } = require("../controllers/trucks-controller");
const { createTruckPosition } = require("../controllers/positions-controller");

// testing...
tripsRouter.get("/test", (req, res) => res.status(200).json({ message: "Server is live" }));

// get all active trips and respective postitions from all trucks
tripsRouter.get("/", getAllTrips, sendTrips);

// get specific truck's ongoing trip by plate 
tripsRouter.get("/:plate", getTruckIdByPlate, getTripByTruckId, sendTrip);

// create a new trip
tripsRouter.post("/", getTruckIdByPlate, createTruck, createTrip, createTruckPosition, getTripById, sendTrip);

module.exports = tripsRouter;
