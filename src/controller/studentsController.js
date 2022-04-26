const studentsService = require("../services/studentsService")
const reqResponse = require('../core/responseHandler');

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


module.exports = {
    test
};
