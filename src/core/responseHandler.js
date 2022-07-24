
/*
Success Reposnse.
   status - Success response status
   succMessage - Success response message
   data - Success response custom data
*/
let successResponse = (status, succMessage, data) => {
    return {
        status,
        message: succMessage,
        data,
    };
};


module.exports = {
    successResponse: successResponse,
};