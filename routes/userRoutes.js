const express = require('express');
const Customer = require('../models/userModel')
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'))
})
router.get('/customer', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'customer.html'))
})

router.get('/pug', (req, res) => {
    res.render('index')
})

router.post('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'))

})
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'))

})

router.get('/addSaleRep', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'salesreg.html'))

})

router.get('/addcustome', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'customer.html'))

})

router.post('/addSalesRep', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'salesreg.html'))

})
router.post('/addcustoma', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'customer.html'))
})

router.post("/addcustomer", async (req, res) => {
    //console.log(req,body)
    try {
        var myData = new Customer(req.body);
        await myData.save()
        console.log('Saved Successfully');

        res.redirect('/customerlist')

    } catch (error) {
        res.status(400).send("unable to save to database");
    };
});

router.get('/customerlist', async (req, res) => {
    try {
         await Customer.find()
            .then(items => {

                res.render('list.pug', { customers: items })
            })
    } catch (error) {
        res.status(400).send("unable to save items in the database")
    }
})

module.exports = router;