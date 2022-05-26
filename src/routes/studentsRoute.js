const studentsController = require("../controller/studentsController");
const express = require('express');
const router = express.Router();



router.post("/personal", studentsController.storePersonalInformation);
router.post("/problem", studentsController.storeProblemInformation);
router.post("/login", studentsController.checkLoginInformation);
router.get("/table/:problemType/:status", studentsController.getStudentsProblem);
router.get("/table_with_status/:status/:problemType", studentsController.getStatus);
router.put("/table", studentsController.changeStatus);





module.exports = router;