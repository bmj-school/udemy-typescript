let userInput: unknown
// let userInput: any

let userName: string


userInput = 34
userInput = 'Maasdf'

/* userName = userInput // Error here! */


function generateError(message:string, code:number): never{
  throw {message: message, errorCode: code};
  }

generateError('An Error!', 500)