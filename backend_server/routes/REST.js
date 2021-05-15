import express from 'express';
import dataBase from './dataBaseConnection.js'

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

//Handles 
router.post('/Weekly', (req, res)=> {
    var queryString = {};
    queryString.username = req.user.username;
    dataBase.setWeeklySchedule(queryString, req.body.weekly, ()=>{
        res.status(200).send("Weekly Schedule set");
    });

});

router.post('/Individual', (req, res)=> {
    var queryString = {};
    queryString.username = req.user.username;
    dataBase.setDailyEvent(queryString, req.body.date, req.body.newInfo, ()=> {
        res.status(200).send("Daily Event Set");
    });

});
export default router;