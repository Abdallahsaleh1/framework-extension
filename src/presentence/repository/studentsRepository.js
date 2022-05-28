const { throws } = require('assert');
const { resolve } = require('path');
const db = require('../../server');

test = async () => {
  var sql = `Select * From students`;
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
        console.log("nxjdkxb");
        resolve(result);
      }
    });
  });
};

module.exports = {
    test,
    dashboardCourses,
    dashboardMajor
};
