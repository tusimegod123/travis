// Require express dependency to include express functionality
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');
// Creates an express server
const server = express();
//Setting the Engine view which contains the pug file
server.set('view engine', 'pug');

//Set the server or application to use bodyparser.json functionalities
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/', userRoutes)
server.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/customerDetails", { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
        if (err) throw err;
        console.log('Successfully connected');

    });

server.listen(3004, () => {
    console.log('Listening on 3004');

})