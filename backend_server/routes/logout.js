import express from 'express';
import loginScripts from '../login_scripts/verifyLogin.js'
import passport from 'passport'

const router = express.Router();

//Logout

router.get('/', (req, res) => {
    req.session.destroy(()=> {
        res.send("Logged Out");
    });

});

export default router;