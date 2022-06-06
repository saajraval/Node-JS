var num;
module.exports.prime = function(req,res){
    console.log(req.body.num);
    num=parseInt(req.body.num)
    if(num>0){
        let count =0
        for(let i=1;i<=num;i++){
            if(num%i==0){
                count++;
            }
        }
        if(count ==2){
            console.log("True");
            res.json({
                "prime":"True"
            })
            // res.json(req.body)
            // res.json("true")
        }
        else{
            console.log("False");
            // res.json("False")
            res.json({
                "prime":"false"
            })
        }
    }
    else{
        console.log("NAN");
        res.json(req.body);
    }
}

module.exports.magicNumber=function(req,res) {
    num = parseInt(req.body.num);
    if(num%2!=0){
        let cube=num*num*num;
        res.json({
            num:cube
        })
    }
    if(num%2==0){
        let sq=num*num;
        res.json({
            num:sq
        })
    }
    if(num<0){
        res.json({
            num:"-1"
        })
    }
}