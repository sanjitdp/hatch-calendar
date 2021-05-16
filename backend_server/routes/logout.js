import express from 'express';
import loginScripts from '../login_scripts/verifyLogin.js'
import passport from 'passport'

const router = express.Router();

//Logout

router.get('/', (req, res) => {
    req.logout();
    res.send("Logged out");

});

export default router;