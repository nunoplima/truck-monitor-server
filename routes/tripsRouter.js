const express = require("express");
const router = express.Router();
const { getAllTrips } = require("../controllers/trips-controller");

// testing...
router.get("/test", (req, res) => res.status(200).json({ message: "Server is live" }));

// get all active trips and respective postitions from all trucks
router.get("/", getAllTrips);

module.exports = router;
