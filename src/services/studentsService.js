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

checkLoginInformation = async (model) => {
 let username = model.username ;
 let password = model.password ;
 return await studentsRepository.checkLoginInformation(username , password)
   
};

getStudentsProblem = async (problemType , status) => {
  return await studentsRepository.getStudentsProblem(problemType , status)
    
 };

 getStatus = async (status , problemType) => {
  return await studentsRepository.getStatus(status , problemType)
    
 };

 changeStatus = async (model) => {
  let problem_status = model.problem_status ;
  let subject_id = model.id ;
  return await studentsRepository.changeStatus(problem_status , subject_id)
    
 };

module.exports = {
  storePersonalInformation,
  storeProblemInformation,
  checkLoginInformation,
  getStudentsProblem,
  getStatus,
  changeStatus
};
