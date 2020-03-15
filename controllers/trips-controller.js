const Trip = require("../models/Trip");

// rearrange trips by truck plate
const rearrangeTrips = arr => (
    arr.reduce((acc, cur) => (
        {
            ...acc,
            [cur.plate]: [
                ...(acc[cur.plate] || []),
                { lat: cur.lat.toString(), lng: cur.lng.toString(), time: cur.time }
            ],
        }
    ), {})
);

const getAllTrips = (req, res, next) => {
    Trip.getAll((err, results) => {
        if (err) return next(err);
        req.trips = Object.entries(rearrangeTrips(results));
        next();
    });
};

const getTripByTruckId = (req, res, next) => {
    Trip.getByTruckId(req.truckId, (err, results) => {
        if (err) return next(err);
        req.trips = results;
        next();
    });
};

const sendTrips = (req, res, next) => {
    res.status(200).json({ trips: req.trips });
};


module.exports = { getAllTrips, getTripByTruckId, sendTrips };