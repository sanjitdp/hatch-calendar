import express from 'express';
import User from '../models/userInfo.js';
import passport from 'passport';
import dataBase from './dataBaseConnection.js'
import login_scripts from '../login_scripts/verifyLogin.js';

const router = express.Router();

//Handles general DB requests
router.get('/', (req, res) => {
    //Assign various params
    var queryString = {};

    //Assign various params

    //Call database with necessary params
    dataBase.callDataBase(queryString, (results)=>{
        res.send(results);
    })


});

//Handles adding of a weekly schedule
router.post('/Weekly', (req, res)=> {
    var queryString = {};
    queryString.username = req.user.username;

    //res.send(req.user);
    dataBase.setWeeklySchedule(queryString, req.body.weekly);

    res.status(200).send("Success!");

});

//Handles the adding of an individual unqiue event
router.post('/Individual', (req, res)=> {
    var queryString = {};
    queryString.username = req.user.username;
    
    const dateNew = req.body.dateNew;
    const newInfo = req.body.newInfo;
    dataBase.setDailyEvent(queryString, dateNew, newInfo);

    res.status(200).send("Changed daily info");

});

router.delete('/DeleteEvent', (req, res)=> {
    var queryString = {};
    queryString.username = "newUser";

    const dateRemove = req.body.dateRemove;

    dataBase.deleteCertainEvent(queryString, dateRemove);

    res.status(200).send("Date Deleted");
});
export default router;