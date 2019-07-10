const Post = require("../models/Post");
const User = require("../models/User");

exports.getProfile = (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role === "User") res.render("profile", { user: req.user });
  else if (req.user.role === "Company") {
    res.render("profiles/company-profile", { user: req.user });
  }
  //res.render("profiles/company-profile", { user: req.user });
};

exports.createPost = (req, res, next) => {
  console.log("THE USER ID", req.user.id);
  Post.create({ ...req.body, author: req.user.id })
    .then(post => {
      res.render("profiles/company-profile");
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.render("viewAll", { posts });
    })
    .catch(err => {
      res.render("viewAll", err);
    });
};
exports.getSinglePost = (req, res, next) => {
  console.log(req.params.id);
  Post.findById(req.params.id)
    .then(post => {
      console.log(post);
      res.render("view-single", post);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAllUserPosts = (req, res, next) => {
  Post.find({ author: req.params.id })
    .then(posts => {
      res.render("profiles/company-profile-posts", { posts });
    })
    .catch(err => {
      console.log(err);
    });
};
