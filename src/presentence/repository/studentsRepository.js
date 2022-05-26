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


checkLoginInformation = async (username , password) => {
  console.log(password , "check")
  var sql = `SELECT * FROM users WHERE registration_id = "${username}" AND password = "${password}"`
  console.log(sql)
    return new Promise(function (resolve, reject) {
      db.query(sql, function (err, result) {
        if (err) {
          resolve(err);
          throw err;
        }
        else {
          console.log(result)
          resolve(result);
        }
      });
    });
  };


  getStudentsProblem = async (problemType , status) => {
    if(problemType == 1 && status =="st"){
        var sql = `SELECT * FROM subjects  LEFT JOIN students ON subjects.stu_id = students.stu_id`
    } else if(problemType != 1 && status =="st"){
      var sql = `SELECT * FROM subjects LEFT JOIN students ON subjects.stu_id = students.stu_id Where subjects.problem_type = ${problemType}`
    }else{
      var sql = `SELECT * FROM subjects LEFT JOIN students ON subjects.stu_id = students.stu_id Where subjects.problem_type = ${problemType} AND  subjects.problem_status = ${status}`
    }
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

  getStatus = async (status , problemType) => {
    if(problemType == 1){
      var sql = `SELECT * FROM subjects  LEFT JOIN students ON subjects.stu_id = students.stu_id Where subjects.problem_status = "${status}" `
  } else if(problemType != 1){
    var sql = `SELECT * FROM subjects LEFT JOIN students ON subjects.stu_id = students.stu_id Where subjects.problem_type = ${problemType} AND  subjects.problem_status = "${status}"`
  }
          return new Promise(function (resolve, reject) {
            db.query(sql, function (err, result) {
              if (err) {
                resolve(err);
                throw err;
              }
              else {
                console.log(result ,"*******************")
                resolve(result);
              }
            });
          });
  

  };

  changeStatus = async (problem_status , subject_id) => {
      var sql = `UPDATE subjects SET problem_status = ${problem_status} WHERE id=${subject_id};`
  
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
  storeProblemInformation,
  checkLoginInformation,
  getStudentsProblem,
  getStatus,
  changeStatus
};
