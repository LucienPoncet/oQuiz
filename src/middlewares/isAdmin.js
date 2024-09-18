function isAdmin(req, res, next){
  // plan d'action
  // - récupérer le user courant (dans res.locals.loggedInUser)
  const loggedInUser = res.locals.loggedInUser;
  // - le rôle est différent de admin ?
  if (loggedInUser.role !== 'admin'){
    //  - si oui : on renvoie une erreur 403 (forbidden) avec une vue
    return res.status(403).render('../views/errors/403');
  }

  //  - sinon : on continue la chaine avec next
  next();
}

module.exports = isAdmin;

