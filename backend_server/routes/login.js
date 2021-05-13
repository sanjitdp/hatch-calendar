import express from 'express';
import loginScripts from '../login_scripts/verifyLogin.js'
import passport from 'passport'

const router = express.Router();

//Login verification

router.post('/', loginScripts.notLoggedIn, (req, res) => {
    passport.authenticate('local', (req, res) => {
        //If we are autheticated, send 200 meaning we are good
        res.send(200);
    })
    res.send(404);
});

export default router;