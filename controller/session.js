var email,password;

module.exports.signup=function(req,res){
    console.log(req.body);
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.gender);
    email = req.body.email;
    password = req.body.password;
    console.log("this is email"+email);
    console.log("this is pass"+password);
    res.json(req.body)
}

module.exports.login = function(req,res){

    console.log(req.body);
    let emailParam = req.body.email
    let passwordParam = req.body.password
    if(emailParam == email && passwordParam == password){
        res.json(req.body)
        console.log("User Authenticated.................!!!");
    } 
    else{
        console.log("Error !!");
        console.log("User not Authenticated !!!");
    }
}
