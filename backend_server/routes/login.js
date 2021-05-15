import express from 'express';
import loginScripts from '../login_scripts/verifyLogin.js'
import passport from 'passport'

const router = express.Router();

//Login verification

router.post('/', loginScripts.notLoggedIn, (req, res) => {
    passport.authenticate('local', req, res, () => {
        //If we are autheticated, send 200 meaning we are good
        res.status(200).send("Successful login");
    })
    res.status(500).send("Unauthorized user >:O")
});

export default router;