import passport from 'passport';
import passportLocal from 'passport-local';
//Verifies if user is logged in or not
//Will help to mainatain user login when later implemented
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }else{
        res.send("Unauthorized");
    }

}
//Checks if user isn't loggged in
function notLoggedIn(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }else{
        res.send("Already authorized");
    }
}

const funcs = { isLoggedIn, notLoggedIn }

export default funcs;