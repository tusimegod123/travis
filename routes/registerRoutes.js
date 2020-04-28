const express = require('express');
const User = require('../models/adminModel')
const Customer = require('../models/customerModel')
const Sales = require('../models/salesModel')
const router = express.Router();
const path = require('path');
//Create a get router with '/' path to display the index.html file in a browser
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'))
})
//Create a get router with a '/customer' path to display the customer.html file in a browser
router.get('/customer', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'customer.html'))
})
/* Create a post router to register and save admin details in the database then redirecting to the login form 
otherwise return an error message "unable to save to database" */
router.post("/register", async (req, res) => {
    try {
        var user = new User(req.body);
        await User.register(user, req.body.password, (error) => {
            if (error) {
                throw error
            }
            res.redirect('/login')
        })
    } catch (error) {
        res.status(400).send("unable to save to database");    
    };
});
/*Creating a post route which captures customer details from the customer registration form
and saves it to the database the redirects the user to the customerlist(a route which displays the 
list.pug file)*/
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
/*Creating '/addsalesRep/ route that helps to capture sales representative details and saves them 
in the datbase and then redirect the user to saleslist(a route that displays list2.pug file
which shows the registered sales representatives) */ 
router.post("/addsalesRep", async (req, res) => {
    try {
        var sale = new Sales(req.body);
        await Sales.register(sale, req.body.password, (error) => {
            if (error) {
                throw error
            }
            res.redirect('/saleslist')
        })
            
    } catch (error) {
        res.status(400).send("unable to save to database");
    };
});
/* Creating a get route which picks data from the database of the registered sales representative
and displays them using the list2.pug file otherwise an error message "unable to find items in the database"
would be displayed on the browser */
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
        res.status(500).send("unable to find item in the database")
        
        
    }
})

router.get('/findcustomer/:id', async (req, res) => {
    try {
        let Total
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