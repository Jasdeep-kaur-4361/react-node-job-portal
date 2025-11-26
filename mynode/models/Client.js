var mongoose=require("mongoose");

function Client(){
    var kuchSchema=mongoose.Schema;
    var clientSchema=new kuchSchema({
        email:{type:String,required:true,unique:true,index:true},
        name:{type:String,required:true},
        mobile:{type:String,required:true},
        address:{type:String,required:true},
        city:{type:String,required:true},
        picpath:{type:String,required:true},
        idpath:{type:String,required:true},
        dos:{type:Date,default:Date.now}



    },{
        versionKey: false // to avoid __v field in table come by default 
    })
    var newCollection=mongoose.model("profileClient",clientSchema)
    return newCollection;
}

module.exports=Client;
