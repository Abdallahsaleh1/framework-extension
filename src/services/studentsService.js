const studentsRepository = require("../presentence/repository/studentsRepository")
const moment = require('moment')

signup = async (model) => {
  await studentsRepository.signup(model.studentRegistrationId, model.password);
  return await studentsRepository.storePersonalInformation(model);
};

dashboardCourses = async () => {
  return await studentsRepository.dashboardCourses();
};

dashboardMajor = async () => {
  return await studentsRepository.dashboardMajor();
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

setChangeMajorInformation = async (model) => {
  model.date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  model.problemStatus = "TO DO";
  return await studentsRepository.setChangeMajorInformation(model)
 };

 getStatus = async (status , problemType) => {
  return await studentsRepository.getStatus(status , problemType)
    
 };

 changeStatus = async (model) => {
  let problem_status = model.problem_status ;
  let subject_id = model.id ;
  return await studentsRepository.changeStatus(problem_status , subject_id)
    
 };


getMajorChange = async (major, year, status) => {
  return await studentsRepository.getMajorChange(major, year ,status)

};

getYear = async (year ,major, status) => {
  return await studentsRepository.getYear(year ,major, status)

};

sendEmail = async (model) => {
  return await studentsRepository.sendEmail(model);
};

sendDoneEmail = async (model) => {
  return await studentsRepository.sendDoneEmail(model);
};
 
getMajorStatus = async (status , major , year) => {
  return await studentsRepository.getMajorStatus(status , major , year)
    
 };

 changeMajorStatus = async (model) => {
  let problem_status = model.problem_status ;
  let major_id = model.id ;
  return await studentsRepository.changeMajorStatus(problem_status , major_id)
    
 };

module.exports = {
  signup,
  storeProblemInformation,
  checkLoginInformation,
  getStudentsProblem,
  getStatus,
  changeStatus,
  getMajorChange,
  getYear,
  setChangeMajorInformation,
  sendEmail,
  dashboardCourses,
  dashboardMajor,
  sendDoneEmail,
  changeMajorStatus,
  getMajorStatus
};
