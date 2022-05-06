const express = require('express');
const router = express.Router();
const controller = require('../controllers/appController.js');
const { login } = require("../auth/auth");

//Main Page routing here.
router.get("/", controller.main_page);
<<<<<<< HEAD
router.post("/logged", login, controller.staff_page);
=======
router.get("/staff",login, controller.staff_page);
>>>>>>> 096c8bc029821fca4408b8f7acf075b0d788b32b
router.post("/new", controller.post_new_entry);
router.get("/new", controller.show_new_dishes);
router.get("/edit/:id", controller.show_update_page);
router.post("/update", controller.post_update);
router.get("/login", controller.show_login);

<<<<<<< HEAD

router.use(function (req, res) {
=======
router.use(function(req, res) {
>>>>>>> 096c8bc029821fca4408b8f7acf075b0d788b32b
    res.status(404);
    res.type('text/plain');
    res.send('404 Not Found.');
});
<<<<<<< HEAD
router.use(function (req, res) {
=======

router.use(function(req, res) {
>>>>>>> 096c8bc029821fca4408b8f7acf075b0d788b32b
    res.status(500);
    res.type('type/plain');
    res.send('Internal Server Error.');
});
module.exports = router;