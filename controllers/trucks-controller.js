const Truck = require("../models/Truck");


const getAllTrucks = (req, res, next) => {
    Truck.getAll((err, results) => {
        if (err) return next(err);
        res.status(200).json({ trucks: results });
    });
};

const getTruckIdByPlate = (req, res, next) => {
    const plate = req.params.plate ? req.params.plate : req.body.plate;
    Truck.getByPlate(plate, (err, result) => {
        if (err) return next(err);
        if (!result) {
            return req.params.plate ? res.status(404).json({ trip: {} }) : next();
        } 
        req.truckId = result.id;
        next();
    });
};

const createTruck = (req, res, next) => {
    if (req.truckId) return next();
    Truck.create(req.body.plate, (err, results) => {
        if (err) return next(err, results);
        req.truckId = results.insertId;
        next();
    }) 
}

module.exports = { getAllTrucks, getTruckIdByPlate, createTruck };