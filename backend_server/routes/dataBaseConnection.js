import express from 'express';
import config from '../../config/config.js'
import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://admin1:" + config.Database.Password + "@cluster0.zvgq0.mongodb.net/" + config.Database.DBName + "?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function callDataBase(query){
    await client.connect();
    console.log("Database Connected");
    var tempDb = client.db(config.Database.Name);
    var resulted = await tempDb.collection(config.Database.Collection).find(query).toArray();
    client.close();
    return resulted;
};
