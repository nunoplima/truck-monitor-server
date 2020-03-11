const connection = require("./config");

connection.query(`DROP TABLE IF EXISTS truck_position`, err => {
    if (err) {
        console.log(err.message);
        connection.end();
    } else {
        connection.query(`DROP TABLE IF EXISTS trip`, err => {
            if (err) {
                console.log(err.message);
                connection.end();
            } else {
                connection.query(`DROP TABLE IF EXISTS truck`, err => {
                    if (err) console.log(err.message);
                    else {
                        console.log("Tables dropped");
                        connection.end();
                    }
                });
            }
        });
    }
});
