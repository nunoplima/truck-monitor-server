const express = require("express");
const tripsRouter = express.Router();
const {
    getAllTrips,
    getTripByTruckId,
    getTripById,
    createTrip,
    endTrip,
    deleteTrip,
    sendTrips,
    sendTrip
} = require("../controllers/trips-controller");
const { getTruckIdByPlate, createTruck } = require("../controllers/trucks-controller");
const { createTruckPosition, deleteTruckPosition } = require("../controllers/positions-controller");


// get all active trips and respective postitions from all trucks
tripsRouter.get("/", getAllTrips, sendTrips);

// get specific truck's ongoing trip by plate 
tripsRouter.get("/:plate", getTruckIdByPlate, getTripByTruckId, sendTrip);

// create a new trip
tripsRouter.post("/", getTruckIdByPlate, createTruck, createTrip, createTruckPosition, getTripById, sendTrip);

// create a new truck position
tripsRouter.post("/:tripId", createTruckPosition, getTripById, sendTrip)

// end trip
tripsRouter.put("/:tripId", endTrip, getTripById, sendTrip);

// delete trip
tripsRouter.delete("/:tripId", deleteTruckPosition, deleteTrip);

module.exports = tripsRouter;
