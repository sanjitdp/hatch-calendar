import express from 'express';
import nodemailer from 'nodemailer';
import config from '../../config/config.js'
import loginScripts from '../login_scripts/verifyLogin.js'

const router = express.Router();

//Email Sending

router.post('/', loginScripts.isLoggedIn, (req, res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.Emailing.email,
            pass: config.Emailing.password
        }
    });
    var mailOptions = {
        from: config.Emailing.email,
        to: req.user.email,
        subject: "Schedule from Hatch",
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            console.log(error)
        }else{
            res.send("Sent");
        }

    });
});

export default router;