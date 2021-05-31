//Imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';


import login from './routes/login.js';
import logout from './routes/logout.js';
import register from './routes/register.js';
import eventRequest from './routes/eventRequests.js';
import dataBase from './dataBaseConnection.js';
import User from './models/userInfo.js';
import emailRouter from './routes/emailSend.js';
import hatchUsers from './routes/hatchUsers.js'
//import eventView from './routes/eventViewRouter.js'

//Connects mongoose to database
dataBase.connectMongoose();

const app = express();
//Sets up express session

app.use(expressSession({
    secret: "hatch",
    resave: false,
    saveUninitialized: false
}));

//Initializes passport
app.use(passport.initialize());
app.use(passport.session());

//JSON Stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Exposes user's username
app.get('*', function (req, res, next) {
    res.locals.user = req.user || null;
    next();
});

//Sets up passport functionality
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Sets up routes
app.use('/login', login);
app.use('/register', register);
app.use('/DBInfo', eventRequest);
app.use('/logout', logout);
app.use('/sendEmail', emailRouter);
app.use('/users', hatchUsers);


//Listens on port 5000
const port = process.env.PORT || '5000';
app.listen(port);




export default app;

