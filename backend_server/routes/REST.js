import express from 'express';
import dataBase from './dataBaseConnection.js'
import User from '../models/userInfo.js'
import passport from 'passport'

const router = express.Router();

//Handles general DB requests
router.get('/', (req, res) => {
    //Assign various params
    queryString = {};

    //Assign various params

    //Call database with necessary params
    dataBase.callDataBase(queryString, (results)=>{
        res.send(results);
    })


});

//Sets Unique Events
router.post('/', (req, res) => {

    var newData = {};
    newData.dateData = req.body.newData;
    newData.date = req.body.date;

    const currUser = {username: req.user.username};

    dataBase.modifyUniqueEvents(currUser, newData).then((err)=>{
        if(err){
            res.status(500).send("Ooop something bad happened");
        }
        res.status(200).send("Change Made!");
    });

    
});

//Sets the weekly schedule of the user
router.post('/SetWeekly', (req, res) => {
    const currUser = {username: req.user.username};

    dataBase.setWeeklySchedule(currUser, res.body.weeklySchedule).then((err)=>{
        if(err){
            res.status(500).send("Ooop something bad happened");
        }
        res.status(200).send("Change Made!");
    });
});

//Delete Date Info
router.delete('/', (req, res) => {
    
});


export default router;