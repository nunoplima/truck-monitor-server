const connection = require("./config");

const createTruckTable = new Promise((resolve, reject) => {
    const sql = `
            CREATE TABLE truck 
                (
                    id INT PRIMARY KEY AUTO_INCREMENT,
                    plate VARCHAR(20) NOT NULL
                )
        `;
    connection.query(sql, err => {
        if (err) reject(err);
        resolve("Trucks table created");
    });
});

const createTripTable = new Promise((resolve, reject) => {
    const sql = `
            CREATE TABLE trip
                (
                    id BIGINT(10) PRIMARY KEY AUTO_INCREMENT,
                    truck_id INT NOT NULL,
                    is_active TINYINT(1) DEFAULT 1,
                    FOREIGN KEY (truck_id) REFERENCES truck(id)
                )
        `;
    connection.query(sql, err => {
        if (err) reject(err);
        resolve("Trips table created");
    });
});

const createPositionTable = new Promise((resolve, reject) => {
    const sql = `
            CREATE TABLE truck_position
                (
                    id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
                    trip_id BIGINT(10) NOT NULL,
                    lat DECIMAL(10, 8) NOT NULL,
                    lng DECIMAL(11, 8) NOT NULL,
                    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (trip_id) REFERENCES trip(id)
                )
        `;
    connection.query(sql, err => {
        if (err) reject(err);
        resolve("Positions table created");
    });
});

const createTables = async () => {
    try {
        const truckTableRes = await createTruckTable;
        console.log(truckTableRes);
        const tripTableRes = await createTripTable;
        console.log(tripTableRes);
        const positionTableRes = await createPositionTable;
        console.log(positionTableRes);
        connection.end();
    } catch (e) {
        console.log(e);
        connection.end();
    }
};

createTables();

// const createPositionTable = new Promise((resolve, reject) => {
//     const sql = `
//             CREATE TABLE truck_position
//                 (
//                     id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
//                     trip_id BIGINT(10) NOT NULL,
//                     coordinate POINT NOT NULL,
//                     time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//                     SPATIAL INDEX(coordinate),
//                     FOREIGN KEY (trip_id) REFERENCES trip(id)
//                 )
//         `;
//     connection.query(sql, err => {
//         if (err) reject(err);
//         resolve("Positions table created");
//     });
// });