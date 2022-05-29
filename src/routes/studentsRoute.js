const studentsController = require("../controller/studentsController");
const express = require('express');
const router = express.Router();



router.get("/dashboardCourses",studentsController.dashboardCourses)
router.get("/dashboardMajor",studentsController.dashboardMajor)
router.post("/signup", studentsController.signup);
router.post("/problem", studentsController.storeProblemInformation);
router.post("/login", studentsController.checkLoginInformation);
router.get("/table/:problemType/:status", studentsController.getStudentsProblem);
router.get("/table_with_status/:status/:problemType", studentsController.getStatus);
router.get("/table_major_change/:major/:year/:status", studentsController.getMajorChange);
router.get("/table_year/:year/:major/:status", studentsController.getYear);
router.put("/table", studentsController.changeStatus);
router.post("/signup", studentsController.signup);
router.post("/changeMajor", studentsController.setChangeMajorInformation);   
router.post("/sendEmail", studentsController.sendEmail);
router.get("/major_with_status/:major/:year/:status", studentsController.getMajorStatus);
router.put("/change_major_status", studentsController.changeMajorStatus);
    
    
    router.post("/sendDoneEmail", studentsController.sendDoneEmail);


module.exports = router;