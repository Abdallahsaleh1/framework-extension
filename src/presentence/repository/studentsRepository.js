const { throws } = require('assert');
const { resolve } = require('path');
const db = require('../../server');

storePersonalInformation = async (model) => {
  var sql = `INSERT INTO students(stu_id,stu_name,stu_email,stu_mobile, problem_type) 
  VALUES
  ('${model.studentRegistrationId}','${model.studentName}','${model.studentEmail}',
  '${model.studentMobileNumber}', ${model.problemType.toString()})`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (err, result) {
      if (err) {
        resolve(err);
        throw err;
      }
      else {
        resolve(result);
      }
    });
  });
};

storeProblemInformation = async (model) => {
  var sql = `INSERT INTO subjects(
    stu_id,course_name,course_number,class_number, instructor_name, course_time, date, problem_status)
    VALUES
    ('${model.studentRegistrationId}','${model.courseName}','${model.courseNumber}','${model.classNumber}',
    '${model.instructorName}','${model.courseTime}', '${model.date}', '${model.problemStatus}')`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (err, result) {
      if (err) {
        resolve(err);
        throw err;
      }
      else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  storePersonalInformation,
  storeProblemInformation
};
