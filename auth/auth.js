const bcrypt = require("bcrypt");
const loginModel = require("../models/loginModel");
const jwt = require("jsonwebtoken");

exports.login = function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

<<<<<<< HEAD
    loginModel.db.findOne({ user: username }, function (err, user) {
        if (err) {
            console.log("error looking up user", err);
            return res.status(401).send();
        }
        if (!user) {
            console.log("user ", username, " not found");
            return res.render("user/register");
        }

        //compare provided password with stored password
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                //use the payload to store information about the user such as username.
                let payload = { username: username };
                //create the access token 
                let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 300 });
                res.cookie("jwt", accessToken);
                next();
            } else {
                return res.render("user/login"); //res.status(403).send();
            }
        });
    });
};

exports.verify = function (req, res, next) {
    let accessToken = req.cookies.jwt;
    if (!accessToken) {
        return res.status(403).send();
    }
    let payload;
    try {
        payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch (e) {
        //if an error occured return request unauthorized error
        res.status(401).send();
    }
};
=======
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
>>>>>>> 096c8bc029821fca4408b8f7acf075b0d788b32b
