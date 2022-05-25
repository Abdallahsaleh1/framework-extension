const studentsRepository = require("../presentence/repository/studentsRepository")
const moment = require('moment')

storePersonalInformation = async (model) => {
  return await studentsRepository.storePersonalInformation(model);
};

storeProblemInformation = async (model) => {
  const timeStamp = new Date(model.courseTime);
  const hours = timeStamp.getHours();
  const minutes = timeStamp.getMinutes();
  
  const courseTime = `${hours}:${minutes}`;
  model.courseTime = courseTime;
  model.date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  model.problemStatus = "TO DO";
  return await studentsRepository.storeProblemInformation(model);
};

module.exports = {
  storePersonalInformation,
  storeProblemInformation
};
