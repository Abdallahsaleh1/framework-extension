const studentsService = require("../services/studentsService")
const reqResponse = require('../core/responseHandler');

storePersonalInformation = async (req, res, next) => {
  try {
    const response = await studentsService.storePersonalInformation(req.body);
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

module.exports = {
  storePersonalInformation,
  storeProblemInformation,
  checkLoginInformation,
  getStudentsProblem,
  getStatus,
  changeStatus
};
