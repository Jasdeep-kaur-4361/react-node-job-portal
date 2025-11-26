var mongoose=require("mongoose");

 function Schemaa()
 {
    var SchemaClass=mongoose.Schema;
    var newSchema=new SchemaClass({
        email:{type:String,required:true,unique:true,index:true},
        password:{type:String,required:true},
        userType:{type:String,required:true},
        dos:{type:Date,default:Date.now}

    },{
        versionKey: false // to avoid __v field in table come by default 
    })
    var newCollection=mongoose.model("projectSignup",newSchema);
    return newCollection;
 }
module.exports=Schemaa;




