const User = require("../models/User");
const passport = require("passport");

exports.getSignup = (req, res, next) => res.render("auth/signup");

exports.postSignup = (req, res, next) => {
  User.register({ ...req.body }, req.body.password)
    .then(() => {
      res.redirect("/auth/login");
    })
    .catch(err => {
      res.render("auth/signup", { err });
    });
};

exports.getLogin = (req, res, next) => res.render("auth/login");

exports.postLogin = passport.authenticate("local", {
  failureRedirect: "/auth/login",
  successRedirect: `/profile/`
});

exports.logout = (req, res, next) => {
  req.logout();
  res.redirect("/auth/login");
};
