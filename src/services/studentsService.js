const studentsRepository = require("../presentence/repository/studentsRepository")
const moment = require('moment')

signup = async (model) => {
  await studentsRepository.signup(model.studentRegistrationId, model.password);
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

checkLoginInformation = async (model) => {
 let username = model.username ;
 let password = model.password ;
 return await studentsRepository.checkLoginInformation(username , password)
   
};

getStudentsProblem = async (model) => {
  return await studentsRepository.getStudentsProblem(model)
};
 
setChangeMajorInformation = async (model) => {
  model.date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  model.problemStatus = "TO DO";
  return await studentsRepository.setChangeMajorInformation(model)
 };

sendEmail = async () => {
  return await studentsRepository.sendEmail();
};
 
module.exports = {
  signup,
  storeProblemInformation,
  checkLoginInformation,
  getStudentsProblem,
  setChangeMajorInformation,
  sendEmail
};
