const studentsController = require("../controller/studentsController");
const express = require('express');
const router = express.Router();



router.get("/", studentsController.test);
router.get("/dashboardCourses",studentsController.dashboardCourses)
router.get("/dashboardMajor",studentsController.dashboardMajor)


module.exports = router;