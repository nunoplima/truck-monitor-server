const Trip = require("../models/Trip");

// rearrange trips by truck plate
const rearrangeTrips = arr => (
    arr.reduce((acc, cur) => (
        {
            ...acc,
            [cur.plate]: [
                ...(acc[cur.plate] || []),
                { lat: cur.lat, lng: cur.lng, time: cur.time }
            ],
        }
    ), {})
);

const getAllTrips = (req, res, next) => {
    Trip.getAll((err, results) => {
        if (err) return next(err);
        res.status(200).json({ trips: Object.entries(rearrangeTrips(results)) });
    });
};

module.exports = { getAllTrips };