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

module.exports = Trip;
