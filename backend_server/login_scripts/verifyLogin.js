
//Verifies if user is logged in or not
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

}
//Checks if user isn't loggged in
function notLoggedIn(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }
}

const funcs = { isLoggedIn, notLoggedIn }

export default funcs;