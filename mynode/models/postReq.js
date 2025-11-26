var mongoose=require("mongoose");

function PostReq(){
    var kuchSchema=mongoose.Schema;
    var PostReqSchema=new kuchSchema({
        email:{type:String,required:true,index:true},
        category:{type:String,required:true},
        taskDetails:{type:String,required:true},
        uptodate:{type:String,required:true},
        location:{type:String,required:true},
        mobile:{type:String,required:true},
        dos:{type:Date,default:Date.now}



    },{
        versionKey: false // to avoid __v field in table come by default 
    })
    var newCollection=mongoose.model("postReqClient",PostReqSchema)
    return newCollection;
}

module.exports=PostReq;
