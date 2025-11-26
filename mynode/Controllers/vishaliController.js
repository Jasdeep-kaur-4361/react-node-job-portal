var path=require("path");
var fs = require("fs");
var clientProfileModel = require("../models/clientProfileModel");

var RefProfileModel = clientProfileModel();
var submitProfile = async (req,resp)=>{
     var ppicPath=path.join(__dirname,"..","uploads",req.files.ppic.name);
     req.files.ppic.mv(ppicPath);
     var ipicPath=path.join(__dirname,"..","uploads",req.files.ipic.name);
     req.files.ipic.mv(ipicPath);
     req.body.ppic = req.files.ppic.name;
     req.body.ipic = req.files.ipic.name;
    var obj=new RefProfileModel(req.body);
    await  obj.save().then((doc)=>{
         resp.send("Data Saved Successfully");
      }).catch((err)=>{
             resp.send(err);
      })
}

var updateProfile = async (req,resp)=>{
//? ===============================Deleting Previous Images===============================================
  RefProfileModel.findOne({email: req.body.email}).then((doc)=>{
   if(req.files != null)
   {
    if(req.files.ppic != null)
    {
    var picpath1 = path.join(__dirname,"..","uploads",doc.ppic);
    fs.unlink(picpath1,(err)=>{
      if (err) {
        console.error('Error deleting the image:', err);
      }
    })
    }
   }
   if(req.files != null)
   {
    if(req.files.ipic != null)
    {
      var picpath2 = path.join(__dirname,"..","uploads",doc.ipic);
    fs.unlink(picpath2,(err)=>{
       if (err) {
         console.error('Error deleting the image:', err);
       }
    })
    }
   }
  
//? =================================Uploading New Image=============================================
  if(req.files != null)
  {
    if(req.files.ppic != null)
    {
      var ppicPath=path.join(__dirname,"..","uploads",req.files.ppic.name);
  req.files.ppic.mv(ppicPath);
  req.body.ppic = req.files.ppic.name;
    }
  }

 if(req.files != null)
 {
  if(req.files.ipic != null)
  {
    var ipicPath=path.join(__dirname,"..","uploads",req.files.ipic.name);
  req.files.ipic.mv(ipicPath);
  req.body.ipic = req.files.ipic.name;
  }
 }
     RefProfileModel.updateOne({email: req.body.email},{
              name: req.body.name,
              address: req.body.address,
              city: req.body.city,
              mobile: req.body.mobile,
              ppic: req.body.ppic,
              ipic: req.body.ipic
                 }).then((result)=>{
                  if(result.acknowledged=== true)
                   resp.send("Updated Successfully");
                  else 
                   resp.send(result);
})
})
}

async function checkEmail(req,resp){
  RefProfileModel.findOne({email: req.body.email}).then((rep)=>{
      if(rep!=null)
      resp.send(rep)
      else(resp.send(null));
  })
}

module.exports = {submitProfile,checkEmail,updateProfile}