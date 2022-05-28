const studentsController = require("../controller/studentsController");
const express = require('express');
const router = express.Router();



    router.post("/signup", studentsController.signup);

    router.post("/problem", studentsController.storeProblemInformation);

    router.post("/login", studentsController.checkLoginInformation);

    router.get("/table/:problemType", studentsController.getStudentsProblem);

    router.post("/changeMajor", studentsController.setChangeMajorInformation);
    
    router.post("/sendEmail", studentsController.sendEmail);



module.exports = router;