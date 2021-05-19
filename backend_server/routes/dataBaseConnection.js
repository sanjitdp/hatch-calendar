import express from 'express';
import config from '../../config/config.js'
import mongodb from 'mongodb'
import mongoose from 'mongoose';

//Code integration for mongo appliation(from mongodb)
const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://admin1:" + config.Database.Password + "@cluster0.zvgq0.mongodb.net/" + config.Database.DBName + "?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Client connect
client.connect();

const funcs = {
    //Returns an array of all the elements that match the query
    async callDataBase(query){
        var tempDb = client.db(config.Database.Name);
        var resulted = await tempDb.collection(config.Database.Collection).findOne(query);
        return resulted;
    },
    //Verifies if a user exists by returning one instance of a matching query
    async findEvents(query, projectionNew){
        var tempDb = client.db(config.Database.Name);
        //Result of querying the collection
        var resulted = await tempDb.collection(config.Database.Collection).findOne(query, {projection: projectionNew });
        return resulted;
    },
    //Connects mongoose to our database
    connectMongoose(){
        mongoose.set("useUnifiedTopology", true);
        mongoose.set("useNewUrlParser", true);
        mongoose.connect(uri);
    },
    //Call and modify weekly schedule
    async setWeeklySchedule(query, newSchedule){
        var tempDb = client.db(config.Database.Name); 
        await tempDb.collection(config.Database.Collection).updateOne(query, {$set: {dataWeekly: newSchedule}});
    },

    //Update the param of an object
    async setDailyEvent(query, dateNew, newEvent){
        var tempDb = client.db(config.Database.Name);
        var tempObj = {};
        
        var tempString = "dateSpecific." + String(dateNew);
        tempObj[tempString] = newEvent;
        await tempDb.collection(config.Database.Collection).updateOne(query, {$set: tempObj});
    },

    //Delete Event on Certain Date
    async deleteCertainEvent(query, dateDelete){
        var tempDb = client.db(config.Database.Name);
        var tempObj = {};
        var tempString = "dateSpecific." + String(dateDelete);
        tempObj[tempString] = "";
        await tempDb.collection(config.Database.Collection).updateOne(query, {$unset: tempObj});
    }


}

export default funcs;
