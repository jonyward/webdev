const express = require('express');
const router = express.Router();
const controller = require('../controllers/appController.js');
const { login } = require("../auth/auth");

//Main Page routing here.
router.get("/", controller.main_page);
router.post("/logged", login, controller.staff_page);
router.post("/new", controller.post_new_entry);
router.get("/new", controller.show_new_dishes);
router.get("/edit/:id", controller.show_update_page);
router.post("/update", controller.post_update);
router.get("/login", controller.show_login);


router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not Found.');
});
router.use(function (req, res) {
    res.status(500);
    res.type('type/plain');
    res.send('Internal Server Error.');
});
module.exports = router;