// function add(a,b){
//     console.log(a+b);
// }
// function sub(a,b){
//     console.log(a-b);
// }
// function mul(a,b){
//     console.log(a*b);
// }
// function div(a,b){
//     console.log(a/b);
// }
// function mod(a,b){
//     console.log(a%b);
// }


module.exports.sum =function(req,res){
    console.log(req.body);
    console.log(req.body.n1);
    console.log(req.body.n2);
    ans = parseInt(req.body.n1)+parseInt(req.body.n2)
    res.json({addition:ans})
}

module.exports.diff = function(req,res){
    // res.json({subtraction:12})
    console.log(req.body);
    console.log(req.body.n1);
    console.log(req.body.n2);
    ans = parseInt(req.body.n1)-parseInt(req.body.n2)
    res.json({addition:ans})
} 

module.exports.squ =function(req,res){
    console.log(req.body);
    console.log(req.body.n1);
    ans = parseInt(req.body.n1)*parseInt(req.body.n1)
    res.json({addition:ans})
}