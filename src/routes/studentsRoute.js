const studentsController = require("../controller/studentsController");
const express = require('express');
const router = express.Router();



router.get("/", studentsController.test);


module.exports = router;