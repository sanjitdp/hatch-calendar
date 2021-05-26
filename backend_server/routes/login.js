import express from 'express';
import loginScripts from '../login_scripts/verifyLogin.js';
import passport from 'passport';
import dataBase from '../routes/dataBaseConnection.js';
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
    res.send({user: req.user});
});

export default router;