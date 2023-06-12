const Vehicle = require('../models/vehicle.models');

module.exports.createVehicle = async (req, res) => {
  try {
    const {
      vehicleName,
      vehiclePlateNumber,
      vehicleColor,
      vehicleEngineNumber,
      vehicleManufacturer,
      vehicleTyreRePSI,
      vehicleOwner,
      phoneNumber,
      ownerAddress,
    } = req.body;

    if (
      (!vehicleName,
      !vehiclePlateNumber,
      !vehicleColor,
      !vehicleEngineNumber,
      !vehicleManufacturer,
      !vehicleTyreRePSI,
      !vehicleOwner,
      !phoneNumber,
      !ownerAddress)
    ) {
      throw new Error('All field must be a filled');
    }

    const vehicle = new Vehicle({
      vehicleName,
      vehiclePlateNumber,
      vehicleColor,
      vehicleEngineNumber,
      vehicleManufacturer,
      vehicleTyreRePSI,
      vehicleOwner,
      phoneNumber,
      ownerAddress,
    });

    const existingVehicle = await Vehicle.findOne({ vehiclePlateNumber})

    if(existingVehicle) {
      return res.status(400).json({ message: "Vehicle already exists" })
    } 

    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

    const savedVehicle = await vehicle.save();

    return res.status(201).json({
      message: 'Vehicle created successfully',
      vehicle: savedVehicle,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating vehicle',
      error: error.message,
    });
  }
};

module.exports.getParticularVehicle = async (req, res) => {
  try {
    const { vehiclePlateNumber } = req.params;

    if(!vehiclePlateNumber) {
      return res.status(404).json({ message: 'Vehicle number number not provided' });
    }

    const vehicleFound = await Vehicle.find({
      vehiclePlateNumber: vehiclePlateNumber,
    });

    return res.status(201).json({
      message: 'Vehicle fetched successfully',
      vehicle: vehicleFound,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching vehicle',
      error: error.message,
    });
  }
};
