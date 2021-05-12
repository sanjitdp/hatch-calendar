import mongoose from 'mongoose';
import passportLocal from 'passport-local-mongoose';

//Sets up schema, which details the information that a user entry will hold in the databse
var schema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require:true
    },


    dataSpecific: {
        type: Object
    },

    dataWeekly: {
        type:Array   
    }
});

//Passport config plugin
schema.plugin(passportLocal);
const User = mongoose.model('User', schema);

export default User;