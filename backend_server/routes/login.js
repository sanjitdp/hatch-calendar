import express from 'express';
import loginScripts from '../login_scripts/verifyLogin.js';
import passport from 'passport';
import dataBase from '../dataBaseConnection.js';
import cookieParser from 'cookie-parser';

const router = express.Router();

//Login verification

router.post('/', (req, res) => {
    passport.authenticate("local")(req, res, () =>{
        //res.cookie('session', req.user, { secure: true, signed: true, expires: new Date(Date.now() + 3600) });
        res.send({user: req.user});
    });
});

router.get('/verify', (req, res) =>{
    if(req.hasOwnProperty('user')){
        res.send({user: req.user});
    }else{
        res.send({user: undefined});
    }
});

export default router;