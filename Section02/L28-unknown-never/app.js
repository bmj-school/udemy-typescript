var userInput;
// let userInput: any
var userName;
userInput = 34;
userInput = 'Maasdf';
/* userName = userInput // Error here! */
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error!', 500);
