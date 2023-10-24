const path = require("path")
const fs = require("fs");
const user = path.join(process.cwd(),"data", "user.json");

const createUser = (email, password) => {
    fs.readFile(user, "utf8", (err, userData) => {
        let myData = JSON.parse(userData);
        let {users} = myData
        let newData = JSON.stringify(users.push({email, password}))
        fs.writeFile(user, newData, (err) => {
            if(err) {
                console.log(users);
            }
        })

    })
}
module.exports = createUser