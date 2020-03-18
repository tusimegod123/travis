//Require mongoose dependency to include mongoose functionality
const mongoose = require("mongoose");


var nameSchema = new mongoose.Schema({

    fName: String,
    currentDate: Date,
    nationality: String,
    phoneNumber: String,
    nin: String,
    dob: Date,
    kindOfVehicle: String,
    refreesName: String,
    refNumber: String,
    refWork: String,
    refdob: Date,
    downPayment: String,
    status: String,
    otherLoans: String,
    stageName: String,
    lc1: String,
    lc3: String

});
module.exports = mongoose.model("Customer", nameSchema);

