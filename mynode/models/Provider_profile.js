var mongoose=require("mongoose");

function Profile_provider(){
    var kuchSchema=mongoose.Schema;
    var providerSchema=new kuchSchema({
        email:{type:String,required:true,unique:true,index:true},
        name:{type:String,required:true},
        contact:{type:String,required:true},
        address:{type:String,required:true},
        city:{type:String,required:true},
        // picpath:{type:String,required:true},
        idpath:{type:String,required:true},
        category:{type:String,required:true},
        expertin:{type:String,required:true},
        experience:{type:String,required:true},
        workaddress:{type:String,required:true},
        otherInfo:{type:String,required:true},
        dos:{type:Date,default:Date.now}


    },{
        versionKey: false // to avoid __v field in table come by default 
    })
    var newCollection=mongoose.model("profileProvider",providerSchema)
    return newCollection;
}

module.exports=Profile_provider;
