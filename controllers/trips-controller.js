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
        req.trip = results;
        next();
    });
};

const getTripById = (req, res, next) => {
    const isActive = req.method === "POST" ? 1 : 0;
    const trip_id = req.params.tripId ? req.params.tripId : req.tripId;
    Trip.getByTripId(trip_id, isActive, (err, results) => {
        if (err) return next(err);
        req.trip = results;
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

const endTrip = (req, res, next) => {
    const { tripId } = req.params;
    Trip.end(tripId, (err, results) => {
        if (err) return next(err);
        req.tripId = tripId;
        next();
    });
};

const deleteTrip = (req, res, next) => {
    Trip.delete(req.tripId, (err, results) => {
        if (err) return next(err);
        res.sendStatus(204);
    });
};

const sendTrips = (req, res, next) => res.status(200).json({ trips: req.trips });

const sendTrip = (req, res, next) => {
    const status = req.method === "GET" || "PUT" ? 200 : 201;
    res.status(status).json({ trip: req.trip });
};


module.exports = { getAllTrips, getTripByTruckId, getTripById, createTrip, deleteTrip, endTrip, sendTrips, sendTrip };