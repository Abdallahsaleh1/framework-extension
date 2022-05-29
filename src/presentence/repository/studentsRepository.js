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

dashboardCourses = async () => {
  var sql = `SELECT * FROM subjects
  left JOIN students ON students.stu_id = subjects.stu_id WHERE subjects.date >= ( CURDATE() - INTERVAL 4 DAY )`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (err, result) {
      if (err) {
        resolve(false);
        throw err;
      }
      else {
        console.log(result)
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
    }else if(problemType == 1 && status !="st"){
      var sql = `SELECT * FROM subjects LEFT JOIN students ON subjects.stu_id = students.stu_id Where subjects.problem_status = "${status}"`
    }else{
      var sql = `SELECT * FROM subjects LEFT JOIN students ON subjects.stu_id = students.stu_id Where subjects.problem_type = ${problemType} AND  subjects.problem_status = "${status}"`
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
    if((problemType == 1 || problemType == 0) && status =="st"){
      var sql = `SELECT * FROM subjects  LEFT JOIN students ON subjects.stu_id = students.stu_id`
  } else if((problemType != 1) && status =="st"){
    var sql = `SELECT * FROM subjects LEFT JOIN students ON subjects.stu_id = students.stu_id Where subjects.problem_type = ${problemType}`
  }else if((problemType == 1 || problemType == 0) && status !="st"){
    var sql = `SELECT * FROM subjects LEFT JOIN students ON subjects.stu_id = students.stu_id Where subjects.problem_status = "${status}"`
  }else{
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


  getMajorChange = async (major, year , status) => {
    if((major == 3 || major ==0) && (year==0 || year ==1) && status == "st"){
      var sql = `SELECT * FROM major_change  LEFT JOIN students ON major_change.stu_id = students.stu_id`
    } else if((major == 3 || major ==0) && (year!=1) && status == "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.study_year = ${year} `
  }else if(major != 3  && (year==0 || year ==1) && status == "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.current_major = ${major} `
  }else if((major == 3 || major ==0)  && (year==0 || year ==1) && status != "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.problem_status = "${status}" `
  }else if((major == 3 || major ==0)  && (year!=1) && status != "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.problem_status = "${status}" AND major_change.study_year = ${year}`
  }else if((major!=3)  && (year==0 || year ==1) && status != "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.problem_status = "${status}" AND major_change.current_major  = ${major}`
  }else if((major!=3)  && (year!=1) && status == "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.study_year = ${year} AND major_change.current_major  = ${major}`
  }else{
    var sql = `SELECT * FROM major_change  LEFT JOIN students ON major_change.stu_id = students.stu_id
    Where major_change.problem_status = "${status}" AND major_change.study_year = ${year} AND major_change.current_major  = ${major} `
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
  
  getYear = async (year ,major , status) => {
    if((major == 3 || major ==0) && (year==0 || year ==1) && status == "st"){
      var sql = `SELECT * FROM major_change  LEFT JOIN students ON major_change.stu_id = students.stu_id`
    } else if((major == 3 || major ==0) && (year!=1) && status == "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.'study_year' = ${year} `
  }else if(major != 3  && (year==0 || year ==1) && status == "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.current_major = ${major} `
  }else if((major == 3 || major ==0)  && (year==0 || year ==1) && status != "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.problem_status = "${status}" `
  }else if((major == 3 || major ==0)  && (year!=1) && status != "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.problem_status = "${status}" AND major_change.'study_year' = ${year}`
  }else if((major!=3)  && (year==0 || year ==1) && status != "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.problem_status = "${status}" AND major_change.current_major  = ${major}`
  }else if((major!=3)  && (year!=1) && status == "st"){
    var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.study_year = ${year} AND major_change.current_major  = ${major}`
  }else{
    var sql = `SELECT * FROM major_change  LEFT JOIN students ON major_change.stu_id = students.stu_id
    Where major_change.problem_status = "${status}" AND major_change.study_year = ${year} AND major_change.current_major  = ${major} `
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
  var sql = `INSERT INTO major_change(stu_id,current_major,next_major,date, study_year, problem_status) 
  VALUES
  ('${model.studentRegistrationId}','${model.currentMajor}','${model.nextMajor}',
  '${model.date}', ${model.studyYear}, '${model.problemStatus}')`;
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

dashboardMajor = async () => {
  var sql = `SELECT * FROM major_change
  left JOIN students ON students.stu_id = major_change.stu_id WHERE major_change.date >= ( CURDATE() - INTERVAL 4 DAY )`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (err, result) {
      if (err) {
        resolve(false);
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


sendEmail = async (model) => {
  return await transporter.sendMail({
    from: 'Head of department of CAP Dr. Hamed',
    to: model.recipient_email,
    subject: model.subject,
    text: model.email
  });
}

sendDoneEmail = async (model) => {
  return await transporter.sendMail({
    from: 'Head of department of CAP Dr. Hamed',
    to: model.recipient_email,
    subject: model.subject,
    text: model.email
  });
}


getMajorStatus = async (status , major , year) => {
  if((major == 3 || major ==0) && (year==0 || year ==1) && status == "st"){
    var sql = `SELECT * FROM major_change  LEFT JOIN students ON major_change.stu_id = students.stu_id`
  } else if((major == 3 || major ==0) && (year!=1) && status == "st"){
  var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.study_year = ${year} `
}else if(major != 3  && (year==0 || year ==1) && status == "st"){
  var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.current_major = ${major} `
}else if((major == 3 || major ==0)  && (year==0 || year ==1) && status != "st"){
  var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.problem_status = "${status}" `
}else if((major == 3 || major ==0)  && (year!=1) && status != "st"){
  var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.study_year = ${year} AND major_change.problem_status = "${status}"`
}else if((major!=3)  && (year==0 || year ==1) && status != "st"){
  var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.current_major  = ${major} major_change.problem_status = "${status}"`
}else if((major!=3)  && (year!=1) && status == "st"){
  var sql = `SELECT * FROM major_change LEFT JOIN students ON major_change.stu_id = students.stu_id Where major_change.study_year = ${year} AND major_change.current_major  = ${major}`
}else{
  var sql = `SELECT * FROM major_change  LEFT JOIN students ON major_change.stu_id = students.stu_id
  Where major_change.study_year = ${year} AND major_change.current_major  = ${major}  major_change.problem_status = "${status}"`
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
changeMajorStatus = async (problem_status , major_id) => {
  var sql = `UPDATE major_change SET problem_status = ${problem_status} WHERE id=${major_id};`

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
  changeStatus,
  getMajorChange,
  getYear,
  setChangeMajorInformation,
  signup,
  sendEmail,
  dashboardCourses,
    dashboardMajor,
  getMajorStatus,
  changeMajorStatus,
  sendDoneEmail
};
