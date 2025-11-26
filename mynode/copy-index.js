var express = require("express");
var jsonwebtoken = require("jsonwebtoken");
var dotenv = require("dotenv");

dotenv.config();// adding sec_key in process.env obj
var app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// app.use(express.json({ extended: true }));

app.post("/login", (req, resp) => {

    console.log(process.env.sec_key);
    var { uid, pwd } = req.body;
    console.log(uid, pwd);

    try {
        // creation of json token
        var token = jsonwebtoken.sign({ uid, pwd }, process.env.sec_key, { expiresIn: 60 * 1 });
        resp.json({ message: "successfullllll", token: token })
    }

catch (err) {
    resp.json({ message: "errror ", error: err.message });
}
})
app.post("/decode",(req,resp)=>{

    try{
        var token=req.body.token;
        var decodedToken=jsonwebtoken.decode(token,process.env.sec_key);
        resp.json({message:"succesfully decoded",data:decodedToken});

    }catch(err)
    {
        resp.json({message:"error occured : ",error:err});
    }

})
app.post("/verify",(req,resp)=>{

    try{
        var token=req.body.token;
        var decodedToken=jsonwebtoken.decode(token,process.env.sec_key);
        resp.json({message:"succesfully verified",data:decodedToken});

    }catch(err)
    {
        resp.json({message:"error occured : token expired ",error:err});
    }

})




app.listen(8083,function(){
    console.log("Server started . . . .");
})



