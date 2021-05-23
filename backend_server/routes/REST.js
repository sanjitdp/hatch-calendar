import express from 'express';
import User from '../models/userInfo.js';
import passport from 'passport';
import dataBase from './dataBaseConnection.js'
import login_scripts from '../login_scripts/verifyLogin.js';

const router = express.Router();

//Handles general DB requests to a specific User
router.get('/', login_scripts.isLoggedIn, (req, res) => {
    //Assign various params
    var queryString = {};
    queryString.username = req.user.username;

    //Assign various params

    //Call database with necessary params
    dataBase.callDataBase(queryString).then((results)=>{
        res.send(results);
    });


});
//Returns the weekly schedule of a user
router.get('/Weekly', login_scripts.isLoggedIn, (req, res)=> {
    var queryString = {};
    queryString.username = req.user.username;
    //Finds based on username
    dataBase.findEvents(queryString, {dataWeekly: 1}).then((results)=> {
        //Returns found weekly data
        res.send(results);
    });
    
});

//Queries for user's specific events
router.get('/Specific', login_scripts.isLoggedIn, (req, res)=> {
    var queryString = {};
    queryString.username = req.user.username;
    //Find based on username
    dataBase.findEvents(queryString, {dateSpecific: 1}).then((results)=>{
        res.send(results);
    });
    
});

//Handles adding of a weekly schedule
router.post('/Weekly', login_scripts.isLoggedIn, (req, res)=> {
    var queryString = {};
    queryString.username = req.user.username;

    dataBase.setWeeklySchedule(queryString, req.body.weekly);

    res.status(200).send("Success!");

});

//Handles the adding of an individual unqiue event
router.post('/Individual', login_scripts.isLoggedIn, (req, res)=> {
    var queryString = {};
    queryString.username = req.user.username;
    
    const dateNew = req.body.dateNew;
    const newInfo = req.body.newInfo;
    const evtTitle = req.body.eventTitle;
    dataBase.setDailyEvent(queryString, dateNew, newInfo, evtTitle);

    res.status(200).send("Changed daily info");

});

//Deletes a certain specific event
router.delete('/DeleteEvent', (req, res)=> {
    var queryString = {};
    queryString.username = "newUser";

    const dateRemove = req.body.dateRemove;

    dataBase.deleteCertainEvent(queryString, dateRemove);

    res.status(200).send("Date Deleted");
});
export default router;