import express from 'express';
import dataBase from './dataBaseConnection.js'

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


export default router;