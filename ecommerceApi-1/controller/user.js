const path = require("path")
const fs = require("fs");
const user = path.join(process.cwd(),"data", "user.json");

const createUser = (firstName, lastName, email, password) => {
    fs.readFile(user, "utf8", (err, userData) => {
        let myData = JSON.parse(userData);
        let {users} = myData;
         users.push({firstName, lastName, email, password})
        let newData = JSON.stringify({users: users})
        fs.writeFile(user, newData, (err) => {
            if(err) {
                console.log(users);
            }
        })

    })
}

const findUser = (email) => {
    fs.readFile(user, "utf8", (err, userData) => {
        let myData = JSON.parse(userData);
        let {users} = myData;
        console.log(users)
         return users.find(usr => usr.email === email)
    })
}

module.exports = {createUser, findUser}