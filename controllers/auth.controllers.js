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
  successRedirect: "/profile"
});

exports.getProfile = (req, res, next) =>
  res.render("profile", { user: req.user });

exports.logout = (req, res, next) => {
  req.logOut();
  res.redirect("/login");
};
