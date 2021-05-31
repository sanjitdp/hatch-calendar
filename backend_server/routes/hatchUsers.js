import express from 'express';
import dataBase from '../dataBaseConnection.js'

const router = express.Router();

//Get all user usernames

router.get('/', (req, res) => {
    var queryString = {};

    dataBase.getAllUsers(queryString).then((results)=>{
        var returnArray = [];
        for(var userObj of results){
            returnArray.push(userObj.username);
        }
        res.send(returnArray);
    });
});

export default router;