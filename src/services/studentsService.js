const studentsRepository = require("../presentence/repository/studentsRepository")

storePersonalInformation = async (model) => {
  return await studentsRepository.storePersonalInformation(model);
};

storeProblemInformation = async (model) => {
  const timeStamp = new Date(model.courseTime);
  const hours = timeStamp.getHours();
  const minutes = timeStamp.getMinutes();
  
  const courseTime = `${hours}:${minutes}`;
  model.courseTime = courseTime;
  return await studentsRepository.storeProblemInformation(model);
};

module.exports = {
  storePersonalInformation,
  storeProblemInformation
};
