const express = require('express');
const User = require('../models/adminModel')
const Customer = require('../models/customerModel')
const Sales = require('../models/salesModel')
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

router.post("/register", async (req, res) => {
    try {
        var admin = new User(req.body);
        //await myData.save()
        await User.register(admin, req.body.password, (error) => {
            if (error) {
                throw error
            }
            res.redirect('/login')
        })
    } catch (error) {
        res.status(400).send("unable to save to database");
        // console.log(error);
        
    };
});

router.post("/addcustomer", async (req, res) => {
    try {
        var myData = new Customer(req.body);
        await myData.save()
            .then(item => {
                res.redirect('/customerlist')
            })
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
        res.status(400).send("unable to find items in the database")
    }
})

router.post("/addsalesRep", async (req, res) => {
    try {
        var sale = new Sales(req.body);
        await Sales.register(sale, req.body.password, (error) => {
            if (error) {
                throw error
            }
            res.redirect('/form2')
        })
            
    } catch (error) {
        res.status(400).send("unable to save to database");
    };
});
router.get('/saleslist', async (req, res) => {
    try {
        await Sales.find()
            .then(items => {

                res.render('list2.pug', { sales: items })
            })
    } catch (error) {
        res.status(400).send("unable to find items in the database")
    }
})
router.get('/findcustomerr', async (req, res) => {
    try {
        let customer = await Customer.find()
        if (req.query.fullName) {
            customer = await Customer.find({ fullName: req.params.fullName })
        }
        res.render('one', { x: customer })
    } catch (error) {
        // res.status(500).send("unable to find item in the database")
        console.log(error);
        
    }
})

router.get('/findcustomer/:id', async (req, res) => {
    try {
        // const Total
        if (Total = 'Boda Boda') {
            Total = 5150160
        } else {
            Total = 7070160
        }
        const customer = await Customer.findById(req.params.id)
        let balance = Total - customer.downPayment
        res.render('one', { x: customer, y: balance })
    } catch (error) {
        console.log(error);
    }
})
router.post('/installment', async (req, res) => {
    try {

        let installmentAmount = req.body.installmentAmount
        let downPayment = req.body.downPayment
        let loanPaid = parseInt(downPayment) + parseInt(installmentAmount);
        const updateLoan = await Customer.updateOne(
            { _id: req.body.customerID },
            { $set: { downPayment: loanPaid } }
        );
        res.json(updateLoan)

    } catch (error) {
        console.log(error);

    }
});

module.exports = router;