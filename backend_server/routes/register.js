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
    
    dataBase.findOne(queryString).then((obj)=>{
        if(obj !== null){
            //There is a user of that name or password in the system
            res.send(404);
        }else{
            //Register a new user
            User.register(new User({
                username: req.body.username,
                email: req.body.email
            }),
            req.body.password, function (err, user){
                if(err){
                    //If there is an error send status 404 back
                    res.send(404);
                }

                //After registering, we authenticate
                passport.authenticate("local")(req, res, () =>{
        
                    res.status(200).send("Success!");
                });

            });
        }
    });
});

export default router;