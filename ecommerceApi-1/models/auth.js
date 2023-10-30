const { createUsers } = require("../controller/user")
const createUser = async(firstName, lastName, email, password) => {
try{
  return await createUsers(firstName, lastName, email, password)
}catch(err){
 throw err
}
}
module.exports = {createUser}