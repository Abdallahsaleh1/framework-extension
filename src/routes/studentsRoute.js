const studentsController = require("../controller/studentsController");
const express = require('express');
const router = express.Router();



router.post("/personal", studentsController.storePersonalInformation);
router.post("/problem", studentsController.storeProblemInformation);
router.post("/login", studentsController.checkLoginInformation);
router.get("/table/:problemType", studentsController.getStudentsProblem);



module.exports = router;