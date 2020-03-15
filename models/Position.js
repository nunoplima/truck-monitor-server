const connection = require("../db/config");

const Position = {};

Position.create = (tripData, cb) => {
    const sql = `INSERT INTO truck_position SET ?`;
    connection.query(sql, [tripData], (err, results) => {
        cb(err, results);
    });
};

Position.delete = (tripId, cb) => {
    const sql = `DELETE FROM truck_position WHERE trip_id = ?`;
    connection.query(sql, tripId, (err, results) => {
        cb(err, results);
    });
}

module.exports = Position;