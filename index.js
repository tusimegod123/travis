console.log('Hello BodaBoda');
// Require express dependency to include express functionality
const express = require('express');

// Creates an express server
const server = express();
server.use(express.static('public'));

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/css/style.css')
})
server.get('/', (req, res) => {
    res.sendFile(__dirname +'/css/bootstrap.css')
}
)


//Have the server listen to trequests from the browser
server.listen(3004, function () {
    console.log('Listening on 3004');

})