const { createUsers, findUser } = require("../model/auth")
const createUser = async(firstName, lastName, email, password) => {
try{
  return await createUsers(firstName, lastName, email, password)
}catch(err){
 throw err
}
}

const login = async(email, password) => {
try{
  const found = await findUser(email);
  if(found.password === password){
    console.log(found)
   return "login sucessfull"
  }else{
    return "icorrect email  id or passwrod"
  }
}catch(err){
  throw err;
}
}
module.exports = {createUser, login}