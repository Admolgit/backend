const express= require('express');
const { createVehicle, getParticularVehicle } = require('../controllers/vehicle.controllers');

const vehicleRouter = express.Router();

vehicleRouter.post('/vehicle', createVehicle);
vehicleRouter.get('/vehicle/:vehiclePlateNumber', getParticularVehicle)

module.exports = vehicleRouter;