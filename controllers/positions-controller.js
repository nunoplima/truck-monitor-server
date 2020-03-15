const Position = require("../models/Position");

const createTruckPosition = (req, res, next) => {
    const { lat, lng } = req.body;
    Position.create({ trip_id: req.tripId, lat: Number(lat), lng: Number(lng) }, (err, results) => {
        if (err) return next(err);
        req.positionId = results.insertId;
        next();
    });
};

const deleteTruckPosition = (req, res, next) => {
    Position.delete(req.params.tripId, (err, results) => {
        if (err) return next(err);
        req.tripId = req.params.tripId;
        next();
    });
};

module.exports = { createTruckPosition, deleteTruckPosition };