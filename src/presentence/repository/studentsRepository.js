const { throws } = require('assert');
const { resolve } = require('path');
const db = require('../../server');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'department.cap@gmail.com',
    pass: 'test@cap21'
  }
});

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


  getStudentsProblem = async (model) => {
    if(model == 1){
        var sql = `SELECT * FROM subjects  LEFT JOIN students ON subjects.stu_id = students.stu_id`
    } else{
      var sql = `SELECT * FROM subjects LEFT JOIN students ON subjects.stu_id = students.stu_id Where students.problem_type = ${model}`
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


sendEmail = async () => {
  let info = await transporter.sendMail({
    from: 'Head of department of CAP Dr. Hamed',
    to: "mohammad.khamlan@stu.najah.edu",
    subject: "Problem",
    text: "We should get A in this course"
  });
}

module.exports = {
  storePersonalInformation,
  storeProblemInformation,
  checkLoginInformation,
  getStudentsProblem,
  setChangeMajorInformation,
  signup,
  sendEmail
};
