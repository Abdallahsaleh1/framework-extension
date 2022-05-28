const { throws } = require('assert');
const { resolve } = require('path');
const db = require('../../server');


storePersonalInformation = async (model) => {
  var sql = `INSERT INTO students(stu_id,stu_name,stu_email,stu_mobile) 
  VALUES
  ('${model.studentRegistrationId}','${model.studentName}','${model.studentEmail}',
  '${model.studentMobileNumber}')`;
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
    stu_id,course_name,course_number,class_number, instructor_name, course_time, date, problem_status, problem_type)
    VALUES
    ('${model.studentRegistrationId}','${model.courseName}','${model.courseNumber}','${model.classNumber}',
    '${model.instructorName}','${model.courseTime}', '${model.date}', '${model.problemStatus}', '${model.problemType}')`;
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


  getMajorChange = async (major, year) => {
    if(major == 3 && (year == 0 || year ==1)){
      var sql = `SELECT * FROM major_change  LEFT JOIN students ON major_change.stu_id = students.stu_id`
  } else if(major != 3 && (year == 0 || year ==1)){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.current_major = ${major}`
  }else{
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.current_major = ${major} AND  major_change.study_year = "${year}"`
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
  
  getYear = async (year ,major) => {
    if((major == 3 || major==0) &&  year ==1){
      var sql = `SELECT * FROM major_change  LEFT JOIN students ON major_change.stu_id = students.stu_id`
  } else if(major != 3 &&  year ==1){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.current_major = ${major}`
  }else{
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.current_major = ${major} AND  major_change.study_year = "${year}"`
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

setChangeMajorInformation = async (model) => {
  var sql = `INSERT INTO major_change(stu_id,current_major,next_major,date, study_year) 
  VALUES
  ('${model.studentRegistrationId}','${model.currentMajor}','${model.nextMajor}',
  '${model.date}', ${model.studyYear})`;
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

signup = async (studentRegistrationId, password) => {
  var sql = `INSERT INTO users(registration_id, password) VALUES ('${studentRegistrationId}','${password}')`;
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
}

module.exports = {
  storePersonalInformation,
  storeProblemInformation,
  checkLoginInformation,
  getStudentsProblem,
  getStatus,
  changeStatus,
  getMajorChange,
  getYear,
  setChangeMajorInformation,
  signup
};
