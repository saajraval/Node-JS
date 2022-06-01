const fs = require("fs")
const validator = require("validator")

let firstName = "ram"
let lastName=""
let email = "wrongemail"

console.log(validator.isEmail(email));