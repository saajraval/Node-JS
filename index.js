const express = require("express")
const cal = require("./Calc")

const app = express();

app.use(express.json())// to body
app.use(express.urlencoded({extended:true}))

app.post("/sum",cal.sum) 
app.post("/diff",cal.diff)
app.post("/sq",cal.squ)

app.listen(9999,function(){
    console.log("server started...on 9999");
})