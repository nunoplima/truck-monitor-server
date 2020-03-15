const connection = require("./config");

const seedTrucks = new Promise((resolve, reject) => {
    const sql = `
        INSERT INTO truck (id, plate) VALUES 
            (1, "PG-10-30"),
            (2, "CC-10-10"),
            (3, "21-NL-99")
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
            (2, 2), 
            (3, 3)
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
            (1, 1, 38.747098, -9.239545, "2020-03-14 12:21:00"),
            (2, 1, 38.744961, -9.232937, "2020-03-14 12:22:00"),
            (3, 1, 38.742322, -9.226329, "2020-03-14 12:24:00"),
            (4, 1, 38.740939, -9.220366, "2020-03-14 12:26:00"),
            (5, 1, 38.740059, -9.213920, "2020-03-14 12:27:00"),
            (6, 1, 38.740436, -9.207957, "2020-03-14 12:28:00"),
            (7, 1, 38.740687, -9.204411, "2020-03-14 12:29:00"),
            (8, 1, 38.739053, -9.204734, "2020-03-14 12:31:00"),
            (9, 1, 38.736413, -9.206345, "2020-03-14 12:32:00"),
            (10, 2, 38.747098, -9.239545, "2020-03-14 12:24:00"),
            (11, 2, 38.744961, -9.232937, "2020-03-14 12:25:00"),
            (12, 2, 38.742322, -9.226329, "2020-03-14 12:27:00"),
            (13, 3, 38.715262, -9.177291, "2020-03-14 20:00:00"),
            (14, 3, 38.720217, -9.176519, "2020-03-14 20:01:00"),
            (15, 3, 38.723900, -9.178628, "2020-03-14 20:02:00"),
            (16, 3, 38.725039, -9.184121, "2020-03-14 20:03:00"),
            (17, 3, 38.725708, -9.190558, "2020-03-14 20:04:00"),
            (18, 3, 38.724570, -9.195708, "2020-03-14 20:05:00"),
            (19, 3, 38.722762, -9.200514, "2020-03-14 20:07:00"),
            (20, 3, 38.720887, -9.206008, "2020-03-14 20:09:00"),
            (21, 3, 38.722025, -9.210728, "2020-03-14 20:10:00"),
            (22, 3, 38.726177, -9.214499, "2020-03-14 20:12:00"),
            (23, 3, 38.729023, -9.218383, "2020-03-14 20:13:00"),
            (24, 3, 38.731601, -9.221752, "2020-03-14 20:14:00")
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