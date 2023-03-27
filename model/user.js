const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
});


const user = mongoose.model('UserData', userSchema);

module.exports= user