var webToken = require("jsonwebtoken");

var jawth = (req, resp, next)=>
{
    console.log("auth");
    console.log("Request headers:", req.headers);

    const token = req.headers['authorization'];
    console.log(token);
    // const isValid = webToken.verify(token, process.env.sec_key);
    // const dtoken = webToken.decode(token, process.env.sec_key);
    var ary=token.split(" ");

    var isValid=webToken.verify(ary[1],process.env.sec_key);
    console.log("+++");
    console.log(isValid);

    // console.log(dtoken);

    if (isValid) {

        // const dtoken = webToken.decode(token, process.env.sec_key)

        const dtoken=webToken.verify(ary[1],process.env.sec_key);
        req.query.emailLog = dtoken.email;
        req.query.passwordLog = dtoken.password;
        console.log(req.query);
        
        next();
    }
    else {
        resp.json({status:false ,message:"invalid token"});
        return;
    }
}
module.exports={jawth};

/*
    SIR
    const jwt = require('jsonwebtoken');

exports.jwtAuth = (req,res,next) =>{
    const token = req.headers['authorization'];
    console.log(token);

    var ary=token.split(" ");
    const isTokenValid = jwt.verify(ary[1],process.env.sec_key);
    if(isTokenValid){
        console.log("***************");
        const user = jwt.decode(ary[1]);
        req.user = user;
        next()
    }
    else{
        res.json({status:false,message:"unauthorized"});
        return;
    }
}*/



/*var token = req.headers['authorization'];
    
    try {
        const user = webtoken.verify(token, process.env.SEC_KEY);
        if (user) {
            const rep = await RefsignupModel.findOne({ email: user.email });
            if (rep != null) {
                resp.json({ status: true, rep});
                return;
            }
        }
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            resp.json({ status: false, message: 'Token has expired' });
        }
    }*/
    