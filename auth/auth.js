const bcrypt = require("bcrypt");
const loginModel = require("../models/loginModel");
const jwt = require("jsonwebtoken");

exports.login = async (req,res) => {
    try{
        const user = await loginModel.findOne(
            {username: req.body.username},
            {"username": 1, "password": 1},
        );

        if (!user) return res.redirect('/login');

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err || !result) return res.rediect('/logged');

            const token = jwt.sign({ id:user.username}, process.env.SECRET,{
                expiresIn: '300s',
            });
            res.cookie('jwt', token).redirect('/logged');
        });
    } catch (err) {
        console.log(err);
    }
};

exports.logout = (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
}