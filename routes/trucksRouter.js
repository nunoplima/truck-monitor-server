const express = require("express");
const trucksRouter = express.Router();
const { getAllTrucks, getTruckIdByPlate } = require("../controllers/trucks-controller");

// get all trucks with ongoing trips
trucksRouter.get("/", getAllTrucks);

module.exports = trucksRouter;
