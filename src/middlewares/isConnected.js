function isConnectedMiddleware(req, res, next){

  if (!res.locals.loggedInUser){
    return res.redirect('../views/userAuth/login');
  }

  next();

}

module.exports = isConnectedMiddleware;
