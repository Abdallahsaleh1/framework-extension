const studentsService = require("../services/studentsService")
const reqResponse = require('../core/responseHandler');

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
  console.log(req.params.problemType)
  try {
    const response = await studentsService.getStudentsProblem(req.params.problemType , req.params.status);
    console.log(response , "**********")
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
  console.log(req.params.major , req.params.year)
  try {
    const response = await studentsService.getMajorChange(req.params.major , req.params.year , req.params.status);
    console.log(response , "**********")
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch (err) {
    next(err);
  }
};

getYear = async (req, res, next) => {
  console.log(req.params.year , req.params.major)
  try {
    const response = await studentsService.getYear(req.params.year , req.params.major , req.params.satus);
    console.log(response , "**********")
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
    const response = await studentsService.sendEmail();
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
  getMajorStatus,
  changeMajorStatus
};
