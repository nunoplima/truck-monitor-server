const Trip = require("../models/Trip");

// const rearrangeTrips = arr => (
//     arr.reduce((acc, cur) => (
//         {
//             ...acc,
//             [cur.id]: {
//                 plate: cur.plate,
//                 coordinates: [
//                     ...((acc[cur.id] || []).coordinates || []),
//                     { lat: cur.lat, lng: cur.lng, time: cur.time }
//                 ]
//             }
//         }
//     ), {})
// );

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
        res.status(200).json({ trips: rearrangeTrips(results) });
    });
};

module.exports = { getAllTrips };

// "trips": {
//     "PG-10-30": [
//         {
//             "lat": 38.736413,
//             "lng": -9.206345,
//             "time": "2020-03-11T12:32:00.000Z"
//         },
//         {
//             "lat": 38.739053,
//             "lng": -9.204734,
//             "time": "2020-03-11T12:31:00.000Z"
//         },
//     ]
// }