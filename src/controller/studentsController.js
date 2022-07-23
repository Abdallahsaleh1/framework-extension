const studentsService = require("../services/studentsService")
const reqResponse = require('../core/responseHandler');
const express = require("express");
var app = express()

app.use(function(req, res, next) {
  var temp = res.send
  res.send = function() {
    console.log('hello');
    temp.apply(this, arguments)
  }
  next()
})

app.get('/dashboardMajor', async function(req, res) {
  console.log('sami is the best');
  try {
    const response = await studentsService.dashboardMajor();
    console.log(response);
    res.send(reqResponse.successResponse(201, "success", response))
  } catch(err){
  }
}
)
  
module.exports = {
  dashboardMajor,
};
