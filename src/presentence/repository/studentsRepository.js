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



dashboardMajor = async () => {
  var sql = `SELECT * FROM student`;
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
    



module.exports = {

  dashboardMajor,

};
