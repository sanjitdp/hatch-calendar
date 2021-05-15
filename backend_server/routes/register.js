import express from 'express';
import dataBase from './dataBaseConnection.js';
import passport from 'passport';
import User from '../models/userInfo.js';
import login_scripts from '../login_scripts/verifyLogin.js'

const router = express.Router();

//Registers a new user
router.post('/', login_scripts.notLoggedIn, (req, res) => {
    //Sets up query string for db
    var queryString = {};
    queryString.username = req.body.username;
    queryString.email = req.body.email;

    const email_format = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z0-9-]+)$/
    const username_format = /^[a-zA-Z0-9_-]+$/

    dataBase.findOne(queryString).then((obj) => {
        if (obj !== null) {
            //There is a user of that name or password in the system
            res.send("There is already a user with that username!");
        } else if (!(username_format.test(req.body.username))) {
            res.send("Username invalid! You can only use letters, numbers, hyphens, and underscores.");
        } else if (!(email_format.test(req.body.email))) {
            res.send("Please input a valid email.")
        } else {
            //Register a new user

            User.register(new User({
                username: req.body.username,
                email: req.body.email,
                dataWeekly: tempArray,
                dateSpecific: {}
            }),
                req.body.password, function (err, user) {
                    if (err) {
                        //If there is an error send status 404 back
                        res.send("Error!");
                    }

                    //After registering, we authenticate
                    passport.authenticate("local")(req, res, () => {
                        console.log("Authenticated!");
                        res.send("Success!");
                    });

                });
        }
    });
});

export default router;