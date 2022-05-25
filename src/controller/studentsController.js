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
    const response = await studentsService.getStudentsProblem(req.params.problemType);
    console.log(response , "**********")
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
  getStudentsProblem
};
