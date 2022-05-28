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
    const response = await studentsService.getStudentsProblem(req.params.problemType);
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

module.exports = {
  signup,
  storeProblemInformation,
  checkLoginInformation,
  getStudentsProblem,
  setChangeMajorInformation,
  sendEmail
};
