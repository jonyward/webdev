const bcrypt = require("bcrypt");
const loginModel = require("../models/loginModel");
const jwt = require("jsonwebtoken");

exports.login = function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    loginModel.lookup(username, function (err, user) {
        if (err) {
          console.log("error looking up user", err);
          return res.status(401).send();
        }
        if (!user) {
          console.log("user ", username, " not found");
          return res.render("login");
        }ster
        bcrypt.compare(password, user.password, function (err, result) {
          if (result) {
            let payload = { username: username };
            let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{expiresIn: 300}); 
            res.cookie("jwt", accessToken);
            next();
          } else {
            return res.render("login");
          }
        });
    });
};
