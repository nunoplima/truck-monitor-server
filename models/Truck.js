const connection = require("../db/config");

const Truck = {};

Truck.getAll = cb => {
    const sql = `
        SELECT * FROM truck
        JOIN trip
            ON trip.truck_id = truck.id
        WHERE trip.is_active = 1
    `;
    connection.query(sql, (err, results, fields) => cb(err, results));
};

Truck.getByPlate = (plate, cb) => {
    const sql = `SELECT * FROM truck WHERE plate = ?`;
    connection.query(sql, plate, (err, results, fields) => {
        cb(err, results[0]);
    });
};

module.exports = Truck;
