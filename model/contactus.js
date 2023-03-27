const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const contactus = mongoose.model('ContactUs', contactSchema);

module.exports= contactus