const User = require("../models/User");
const passport = require("passport");

exports.getSignup = (req, res, next) => res.render("auth/signup");

exports.postSignup = (req, res, next) => {
  User.register({ ...req.body }, req.body.password)
    .then(user => {
      res.redirect("/");
    })
    .catch(err => {
      res.render("index", { err });
    });
};

exports.postLogin = passport.authenticate("local", {
  failureRedirect: "/",
  successRedirect: `/profile/`
});

exports.logout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
