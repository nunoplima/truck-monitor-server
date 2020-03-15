const connection = require("../db/config");

const Trip = {};

Trip.getAll = cb => {
    const sql = `
        SELECT trip_id id, plate, lat, lng, time FROM trip
        JOIN truck
            ON trip.truck_id = truck.id
        JOIN truck_position
            ON trip.id = truck_position.trip_id
        WHERE trip.is_active = 1
        ORDER BY time DESC

    `;
    connection.query(sql, (err, results, fields) => {
        cb(err, results);
    });
};

Trip.getByTruckId = (truckId, cb) => {
    const sql = `
        SELECT * FROM trip 
        JOIN truck_position
            ON trip.id = truck_position.trip_id
        WHERE truck_id = ? AND trip.is_active = 1`;
    connection.query(sql, truckId, (err, results, fields) => {
        cb(err, results);
    });
};

Trip.getByTripId = (TripId, cb) => {
    const sql = `
        SELECT * FROM trip 
        JOIN truck_position
            ON trip.id = truck_position.trip_id
        WHERE trip_id = ? AND trip.is_active = 1`;
    connection.query(sql, TripId, (err, results, fields) => {
        cb(err, results);
    });
};

Trip.create = (truckId, cb) => {
    const sql = `INSERT INTO trip (truck_id) VALUES (?)`;
    connection.query(sql, truckId, (err, results, fields) => {
        cb(err, results);
    });
};

module.exports = Trip;
