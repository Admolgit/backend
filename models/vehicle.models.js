const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
  vehicleName: {
    type: String,
    required: true
  },
  vehiclePlateNumber: {
    type: String,
    required: true
  },
  vehicleColor: {
    type: String,
    required: true
  },
  vehicleEngineNumber: {
    type: String,
    required: true
  },
  vehicleManufacturer: {
    type: String,
    required: true
  },
  vehicleTyreRePSI: {
    type: String,
    required: true
  },
  vehicleOwner: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  ownerAddress: {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    countryCode: {
      type: Number,
      required: true
    }
  }
}, {timestamp: true})

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;