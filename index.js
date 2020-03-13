// Require express dependency to include express functionality
const express = require('express');
// Creates an express server
const server = express();
//Require mongoose dependency to include mongoose functionality
const mongoose = require("mongoose");
//Require body-parser dependency to include body-parser functionality
const bodyParser = require('body-parser')

server.use(express.static('public'))

//Setting the Engine view which contains the pug file
server.set('view engine', 'pug');
//Set the server or application to use bodyparser.json functionalities
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/customerDetails", { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) throw err;
    console.log('Successfully connected');

});

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
var Customer = mongoose.model("Customer", nameSchema);


server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
server.get('/customer', (req, res) => {
    res.sendFile(__dirname + '/customer.html')
})

server.get('/pug', (req, res) => {
    res.render('index')
})

server.post("/addcustomer", async (req, res) => {
    //console.log(req,body)
    try {
        var myData = new Customer(req.body);
        await myData.save()
        console.log('Saved Successfully');

        //At first it was (res.send("item saved to database");
        res.redirect('/customerlist')

    } catch (error) {
        res.status(400).send("unable to save to database");
    };
});

//create aget router to capture info from the browser
server.get('/customerlist', async (req, res) => {
    try {
        await Customer.find()
            .then(items => {
                console.log(items);

                res.render('list', { customers: items })
            })
    } catch (error) {
        res.status(400).send("unable to save items in the database")
    }
})


//Have the server listen to trequests from the browser
server.listen(3004, () => {
    console.log('Listening on 3004');

})