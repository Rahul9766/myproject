const mongoose = require('mongoose');


const buySchema = new mongoose.Schema({
    ownerName: String,
    slotName: String,
    vehicleType: String,
    vehicleModel: String,
    vehicleNumber: String,
    entryTime: String,
    exitTime: String,
    parkingFee: Number,
});

const buynow = mongoose.model('BookingData', buySchema);

module.exports= buynow