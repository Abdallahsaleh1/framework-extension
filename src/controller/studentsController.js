const studentsService = require("../services/studentsService")
const resHandler = require('../core/responseHandler');
const express = require("express");
var app = express()

studentsInfo = async (req, res, next) => {
  try {
    const response = await studentsService.studentsInfo();
  
    return res.status(resHandler.successResponse(200, 'success', response))
  } catch (err) {
    next(err)
  }
}

  
module.exports = {
  studentsInfo,
};
