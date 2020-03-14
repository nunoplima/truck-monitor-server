const connection = require("./config");

const seedTrucks = new Promise((resolve, reject) => {
    const sql = `
        INSERT INTO truck (id, plate) VALUES 
            (1, "PG-10-30"),
            (2, "CC-10-10")
        `;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            console.log(err);
            connection.end();
        }
        else resolve("Trucks table seeded");
    });
});

const seedTrips = new Promise((resolve, reject) => {
    const sql = `
        INSERT INTO trip (id, truck_id) VALUES 
            (1, 1),
            (2, 2)
        `;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            console.log(err);
            connection.end();
        }
        else resolve("Trips table seeded");
    });
});

const seedPositions = new Promise((resolve, reject) => {
    const sql = `
        INSERT INTO truck_position (id, trip_id, lat, lng, time) VALUES 
            (1, 1, 38.747098, -9.239545, "2020-03-11 12:21:00"),
            (2, 1, 38.744961, -9.232937, "2020-03-11 12:22:00"),
            (3, 1, 38.742322, -9.226329, "2020-03-11 12:24:00"),
            (4, 1, 38.740939, -9.220366, "2020-03-11 12:26:00"),
            (5, 1, 38.740059, -9.213920, "2020-03-11 12:27:00"),
            (6, 1, 38.740436, -9.207957, "2020-03-11 12:28:00"),
            (7, 1, 38.740687, -9.204411, "2020-03-11 12:29:00"),
            (8, 1, 38.739053, -9.204734, "2020-03-11 12:31:00"),
            (9, 1, 38.736413, -9.206345, "2020-03-11 12:32:00"),
            (10, 2, 38.747098, -9.239545, "2020-03-11 12:24:00"),
            (11, 2, 38.744961, -9.232937, "2020-03-11 12:25:00"),
            (12, 2, 38.742322, -9.226329, "2020-03-11 12:27:00")
        `;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            console.log(err);
            connection.end();
        }
        else resolve("Positions table seeded");
    });
});

const seedTables = async () => {
    const seedTrucksRes = await seedTrucks;
    console.log(seedTrucksRes);
    const seedTripsRes = await seedTrips;
    console.log(seedTripsRes);
    const seedPositionsRes = await seedPositions;
    console.log(seedPositionsRes);
    connection.end();
};

seedTables();