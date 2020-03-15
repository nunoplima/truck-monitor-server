const express = require("express");
const tripsRouter = express.Router();
const { getAllTrips, getTripByTruckId, sendTrips } = require("../controllers/trips-controller");
const { getTruckIdByPlate } = require("../controllers/trucks-controller");


// testing...
tripsRouter.get("/test", (req, res) => res.status(200).json({ message: "Server is live" }));

// get all active trips and respective postitions from all trucks
tripsRouter.get("/", getAllTrips, sendTrips);

// get specific truck's ongoing trip by plate 
tripsRouter.get("/:plate", getTruckIdByPlate, getTripByTruckId, sendTrips);

// create a new trip

module.exports = tripsRouter;
