const getErrorStatus = require("../core/errorData");
function findErrorMessage(status) {
    return (
        getErrorStatus.ERROR_STATUS_ARRAY.find((v) => v.status == status) || {
            error: "There must be an error",
        }
    );
}
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
/*
   Error Reposnse.
   res - Send error response
   statusCode - Error Status Code
*/
let errorResponse = (statusCode) => {
    return findErrorMessage(statusCode);
};
module.exports = {
    errorResponse,
    successResponse: successResponse,
};