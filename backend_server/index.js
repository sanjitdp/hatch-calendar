//Imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dataBase from './routes/dataBaseConnection.js';


const app = express();

//JSON Stuff
app.use(express.json());
app.use(express.urlencoded())

const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

 

export default app;

