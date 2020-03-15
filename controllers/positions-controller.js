const Position = require("../models/Position");


const createTruckPosition = (req, res, next) => {
    const { lat, lng } = req.body;
    const trip_id = req.params.tripId || req.tripId;
    Position.create({ trip_id, lat: Number(lat), lng: Number(lng) }, (err, results) => {
        if (err) return next(err);
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