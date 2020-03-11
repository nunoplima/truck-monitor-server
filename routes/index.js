const express = require("express");
const router = express.Router();
const { getAllTrips } = require("../controllers/trips-controller");

// get all active trips and respective postitions from all trucks
router.get("/all", getAllTrips);

module.exports = router;
