import express from 'express';
import loginScripts from '../login_scripts/verifyLogin.js';
import passport from 'passport';
import dataBase from '../routes/dataBaseConnection.js'

const router = express.Router();

//Login verification

router.post('/', loginScripts.notLoggedIn, (req, res) => {
    passport.authenticate("local")(req, res, () =>{
        res.status(200).send("Logged In");
    })
});

export default router;