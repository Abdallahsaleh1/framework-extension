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

checkLoginInformation = async (model) => {
 let username = model.username ;
 let password = model.password ;
 return await studentsRepository.checkLoginInformation(username , password)
   
};

getStudentsProblem = async (model) => {
  return await studentsRepository.getStudentsProblem(model)
    
 };

module.exports = {
  storePersonalInformation,
  storeProblemInformation,
  checkLoginInformation,
  getStudentsProblem
};
