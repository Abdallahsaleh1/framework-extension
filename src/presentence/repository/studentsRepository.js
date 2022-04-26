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

module.exports = {
    test
};
