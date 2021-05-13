import express from 'express';
import loginScripts from '../login_scripts/verifyLogin.js'
import passport from 'passport'

const router = express.Router();

//Login verification

router.post('/', loginScripts.notLoggedIn, (req, res) => {
    passport.authenticate('local', (req, res) => {
        //If we are authenticated, send 200 meaning we are good
        res.send("Authenticated!");
    })
    res.send("Not authenticated!");
});

export default router;