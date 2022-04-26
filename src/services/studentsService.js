const studentsRepository = require("../presentence/repository/studentsRepository")

test = async () => {
  return await studentsRepository.test();
};


module.exports = {
    test
};
