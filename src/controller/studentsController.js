const studentsService = require("../services/studentsService")
const reqResponse = require('../core/responseHandler');
const res = require("express/lib/response");

// res.success = function(){

// }





signup = async (req, res, next) => {
  try { 
    const response = await studentsService.signup(req.body);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

dashboardCourses = async (req, res, next) => {
  try {
    const response = await studentsService.dashboardCourses();
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch(err){
    next(err);
  }

}
dashboardMajor = async (req, res, next) => {
  try {
    const response = await studentsService.dashboardMajor();
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch(err){
    next(err);
  }

}



storeProblemInformation = async (req, res, next) => {
  try {
    const response = await studentsService.storeProblemInformation(req.body);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

checkLoginInformation = async (req, res, next) => {
  try {
    const response = await studentsService.checkLoginInformation(req.body);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

getStudentsProblem = async (req, res, next) => {
  try {
    const response = await studentsService.getStudentsProblem(req.params.problemType , req.params.status);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};


getStatus = async (req, res, next) => {
  try {
    const response = await studentsService.getStatus(req.params.status , req.params.problemType);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};


changeStatus = async (req, res, next) => {
  try {
    const response = await studentsService.changeStatus(req.body);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

getMajorChange = async (req, res, next) => {
  try {
    const response = await studentsService.getMajorChange(req.params.major , req.params.year , req.params.status);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

getYear = async (req, res, next) => {
  try {
    const response = await studentsService.getYear(req.params.year , req.params.major , req.params.status);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

setChangeMajorInformation = async (req, res, next) => {
  try {
    const response = await studentsService.setChangeMajorInformation(req.body);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

sendEmail = async (req, res, next) => {
  try {
    const response = await studentsService.sendEmail(req.body);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

sendDoneEmail = async (req, res, next) => {
  try {
    const response = await studentsService.sendDoneEmail(req.body);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

getMajorStatus = async (req, res, next) => {
  try {
    const response = await studentsService.getMajorStatus(req.params.status , req.params.major , req.params.year);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

changeMajorStatus = async (req, res, next) => {
  try {
    const response = await studentsService.changeMajorStatus(req.body);
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signup,
  storeProblemInformation,
  checkLoginInformation,
  getStudentsProblem,
  getStatus,
  changeStatus,
  getMajorChange,
  getYear,
  setChangeMajorInformation,
  sendEmail,
  dashboardCourses,
  dashboardMajor,
  getMajorStatus,
  changeMajorStatus,
  sendDoneEmail
};
