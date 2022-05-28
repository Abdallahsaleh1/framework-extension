const studentsRepository = require("../presentence/repository/studentsRepository")

test = async () => {
  return await studentsRepository.test();
};

dashboardCourses = async () => {
  return await studentsRepository.dashboardCourses();
};

dashboardMajor = async () => {
  return await studentsRepository.dashboardMajor();
};
module.exports = {
    test,
    dashboardCourses,
    dashboardMajor
};
