const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
var registerSchema = new mongoose.Schema({
    fname: String,
    userid: String,
    password: String,
    email: String,
    supervisor: String,
    numberOfWorkingDays: Number,
    dateOfBirth: Date,
    contact: String,
    currentDate: Date,
    role: String

});
registerSchema.plugin(passportLocalMongoose, { usernameField: 'userid' })
module.exports = mongoose.model("Sales", registerSchema);