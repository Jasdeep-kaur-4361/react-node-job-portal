var webtoken = require("jsonwebtoken");
var signupModel = require("../models/signupModel");

var RefsignupModel = signupModel();

async function doSignup(req,resp)
{
    var obj=new RefsignupModel(req.body);
    await  obj.save().then((doc)=>{
         resp.json("Signed Up Successfully...");
      }).catch((err)=>{
             resp.send(err);
      })
}

async function doLogin(req,resp)
{
        await RefsignupModel.findOne({email: req.body.email}).then((rep)=>{
             if(rep == null)
             {
              resp.json({status:false,message:"Invalid Email-Id !!!.."})
              return;
             }
             else if(req.body.pwd != rep.pwd)
             {
              resp.json({status:false,message:"Wrong Password"});
              return;
             } 
             else if(rep.status == 1)
             {
              var token = webtoken.sign({email: rep.email,pwd: rep.pwd,status: rep.status},process.env.SEC_KEY,{expiresIn: '1h'});
                    resp.json({status:true,rep,token});
              }
       })

}

async function doLoginWithToken(req,resp){
       var token = req.headers['authorization'];
    
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
    }
}

module.exports = {doSignup,doLogin,doLoginWithToken};