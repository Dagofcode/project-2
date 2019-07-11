exports.checkLoggedUser = (req, res, next) => {
  req.user
    ? (req.app.locals.loggedUser = true)
    : (req.app.locals.loggedUser = false);
  next();
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send("/");
  }
};
