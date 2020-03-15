const Truck = require("../models/Truck");


const getAllTrucks = (req, res, next) => {
    Truck.getAll((err, results) => {
        if (err) return next(err);
        res.status(200).json({ trucks: results });
    });
};

const getTruckIdByPlate = (req, res, next) => {
    Truck.getByPlate(req.params.plate, (err, result) => {
        if (err) return next(err);
        if (!result) res.sendStatus(404);
        req.truckId = result.id;
        next();
    });
};

module.exports = { getAllTrucks, getTruckIdByPlate };