const express = require("express")
const cal = require("./controller/Calc")
const session = require("./controller/session")
const logic=require("./controller/logic")
const app = express();

app.use(express.json())// to body
app.use(express.urlencoded({extended:true}))

//clac functions calling
app.post("/sum",cal.sum) 
app.post("/diff",cal.diff)
app.post("/sq",cal.squ)

// session function calling 
app.post("/signup",session.signup)
app.post("/login",session.login)
app.post("/prime",logic.prime)
app.post("/mgNum",logic.magicNumber)

app.listen(9999,function(){
    console.log("server started...on 9999");
})