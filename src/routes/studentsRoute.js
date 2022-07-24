const studentsController = require("../controller/studentsController");
const express = require('express');
const router = express.Router();

router.get("/getStudentsInfo",studentsController.studentsInfo)

module.exports = router;