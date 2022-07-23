const studentsRepository = require("../presentence/repository/studentsRepository")
const moment = require('moment')



dashboardMajor = async () => {
  return await studentsRepository.dashboardMajor();
};

 


module.exports = {

  dashboardMajor,

};
