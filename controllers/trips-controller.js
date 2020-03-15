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
        req.trip = results[0];
        next();
    });
};

const getTripById = (req, res, next) => {
    Trip.getByTripId(req.tripId, (err, results) => {
        if (err) return next(err);
        req.trip = results[0];
        next();
    });
};

const createTrip = (req, res, next) => {
    Trip.create(req.truckId, (err, results) => {
        if (err) return next(err);
        req.tripId = results.insertId;
        next();
    });
};

const sendTrips = (req, res, next) => res.status(200).json({ trips: req.trips });

const sendTrip = (req, res, next) => {
    const status = req.method === "GET" ? 200 : 201;
    res.status(status).json({ trip: req.trip });
};


module.exports = { getAllTrips, getTripByTruckId, getTripById, createTrip, sendTrips, sendTrip };