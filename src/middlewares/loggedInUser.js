const { User } = require ('../models');

async function loggedInUserMiddleware(req, res, next){
  if (req.session.userId){
    res.locals.loggedInUser = await User.findByPk(req.session.userId);
    res.locals.loggedInUser.password = "";
  }

  next();
}

module.exports = loggedInUserMiddleware;
