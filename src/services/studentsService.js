const studentsRepository = require("../presentence/repository/studentsRepository")
const moment = require('moment')



studentsInfo = async () => {
  return await studentsRepository.studentsInfo();
};

 


module.exports = {

  studentsInfo,

};
