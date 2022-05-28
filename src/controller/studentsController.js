const studentsService = require("../services/studentsService")
const reqResponse = require('../core/responseHandler');
const res = require("express/lib/response");

test = async (req, res, next) => {
  try {
    const response = await studentsService.test();
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
    console.log(response)
    res
      .status(201)
      .send(reqResponse.successResponse(201, "success", response));
  } catch(err){
    next(err);
  }

}

module.exports = {
    test,
    dashboardCourses,
    dashboardMajor
};
