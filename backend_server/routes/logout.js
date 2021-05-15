import express from 'express';
import loginScripts from '../login_scripts/verifyLogin.js'
import passport from 'passport'

const router = express.Router();

//Logout

router.get('/', (req, res) => {
    req.session.destroy((req, res) => {
        res.status(200).send("Logout");
    })
});

export default router;