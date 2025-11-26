var getSchema = require("../models/Schema");
var getclientSchema = require("../models/Client");
var getProviderSchema = require("../models/Provider_profile");
var getPostReqSchema = require("../models/postReq");

const express = require('express');
const router = express.Router();
var path = require("path");

var newRefSchema = getSchema();
var clientRef = getclientSchema();
var providerRef = getProviderSchema();
var postReqSchema = getPostReqSchema();


var webToken = require("jsonwebtoken");

async function getImageName(req, resp) {
    console.log("llolhnhbiik koln ");

    console.log(req.query);

}
async function chkData_with_post(req,resp){
    console.log("checking data.............");
    // var obj = new newRefSchema(req.body);
    var countt = newRefSchema.findOne({ email: req.body.emailLog }).count;
    console.log("the count is = ",countt);
    if (countt == 0) {
        resp.json({ status: false, message: "User already exist !!" });
        return;
    }

    // var user = await newRefSchema.findOne({ email: req.body.emailLog, password: req.body.passwordLog })
    
    
}
async function signup_with_post(req, resp) {
    console.log(req.body);
    var obj = new newRefSchema(req.body);
    await obj.save().then(() => {
        console.log("********");
        console.log("Signup Successfull");
        resp.json({ status: true, message: "Signup Successful !!" });

    }).catch((err) => {
        resp.json({ status: false, message: err.message });
    })
}
async function login(req, resp) {
    console.log("----controller login---- ");

    console.log(req.body);
    console.log(process.env.sec_key);

    var count = newRefSchema.findOne({ email: req.body.emailLog }).count;
    if (count == 0) {
        resp.json({ status: false, message: "User does not exist !!" });
        return;
    }

    var user = await newRefSchema.findOne({ email: req.body.emailLog, password: req.body.passwordLog })
    console.log(user);
    // console.log(req.body.emailLog);
    // console.log(req.body.passwordLog);

    console.log("$$$");

    try {
        if (user != null) {
            console.log(user.userType);

            var token = webToken.sign({ email: user.email, userType: user.userType }, process.env.sec_key, { expiresIn: '1h' });
            console.log(token);
            console.log("token ban gya ^^^");
            // var du=webToken.decode(token,process.env.sec_key);   
            // console.log(du);


            resp.json({ status: true, user, token, message: "Logged In . . ." })
        }
        else {
            resp.json({ status: false, message: "Invalid Password" });
            return;
        }
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            resp.json({ status: false, message: 'Token has expired' });
        }
        else {
            resp.json({ status: false, message: 'something went wrongggg' });

        }
    }
    /* .then((kuch) => {
        
        if (kuch == null) {
            resp.send("Invalid Email ID !!");
            return;
        }
        if (req.body.passwordLog != kuch.password) {
            resp.send("Wrong password");
        }
        else
            resp.send("Logged in");
    }).catch((err) => {
        resp.send(err);
    })*/
}
async function profile_client(req, resp) {

    console.log(req.body);

    // ===============   Profile Pic   ===============
    // var fpath = path.join(__dirname, "..", "uploads", req.files.profilepic.name);

    // req.files.profilepic.mv(fpath);
    // req.body.picpath = req.files.profilepic.name;

    // ===============   ID PROOF   ===============
    var fidpath = path.join(__dirname, "..", "uploads", req.files.idproof.name);

    req.files.idproof.mv(fidpath);
    req.body.idpath = req.files.idproof.name;




    var obj = new clientRef(req.body);

    await obj.save().then((doc) => {
        resp.send("Saved and pics uploaded");

    })
}
async function profile_provider(req, resp) {

    console.log("!!!!!!!!");
    console.log(req.body);
    console.log("@@@@@@@@@");
    // console.log(req.body.workaddress);


    // ===============   ID PROOF   ===============
    var fidpath = path.join(__dirname, "..", "uploads", req.files.idproof.name);

    req.files.idproof.mv(fidpath);
    req.body.idpath = req.files.idproof.name;


    var obj = new providerRef(req.body);

    await obj.save().then((doc) => {
        resp.send("Saved and pics uploaded");

    })

}
async function profileUpdate(req, resp) {
    console.log("-------- Data -------");
    console.log(req.body);

    const { email, name, mobile, address, city } = req.body;
    const profilepic = req.files.profilepic;
    const idproof = req.files.idproof;
    let picpath = "";
    let idpath = "";

    if (profilepic) {
        picpath = path.join(
            __dirname,
            "..",
            "uploads",
            profilepic.name
        );
        profilepic.mv(picpath);
    }

    if (idproof) {
        idpath = path.join(__dirname, "..", "uploads", idproof.name);
        idproof.mv(idpath);
    }

    const updateData = {
        name,
        mobile,
        address,
        city,


    };
    // console.log(updateData);
    // resp.send("ok");
    // return;
    if (profilepic) {
        updateData.picpath = profilepic.name;
    }
    if (idproof) {
        updateData.idpath = idproof.name;
    }

    await clientRef.updateOne({ email }, { $set: updateData })
        .then((doc) => {
            // resp.send("Profile Data Saved");
            resp.send(JSON.stringify(doc));
        })
        .catch((err) => {
            resp.send(err.message);
        });
}
async function provider_modify(req, resp) {
    console.log("-------- Data -------");
    console.log(req.body);

    const { email, name, contact, address, city, category, expertin, experience, workaddress, otherInfo } = req.body;
    const profilepic = req.files.profilepic;
    const idproof = req.files.idproof;
    let idpath = "";


    if (idproof) {
        idpath = path.join(__dirname, "..", "uploads", idproof.name);
        idproof.mv(idpath);
    }

    const updateData = {
        name,
        contact,
        address,
        city,
        category,
        expertin,
        experience,
        workaddress,
        otherInfo


    };
    // console.log(updateData);
    // resp.send("ok");
    // return;

    if (idproof) {
        updateData.idpath = idproof.name;
    }

    await providerRef.updateOne({ email }, { $set: updateData })
        .then((doc) => {
            // resp.send("Profile Data Saved");
            resp.send(JSON.stringify(doc));
        })
        .catch((err) => {
            resp.send(err.message);
        });
}
async function fetchCities(req, resp) {
    // console.log("hy reached");
    await providerRef.distinct("city").then((kuch) => {
        // console.log("*-*-*-*-*");
        resp.send(kuch);
    })
}
async function fetchCategories(req, resp) {
    // console.log("hy reached");
    await providerRef.distinct("category").then((kuch) => {
        // console.log("*-*-*-*-*");
        resp.send(kuch);
    })
}
async function searchProvider(req, resp) {
    console.log(req.body);
    console.log(req.body[0]);
    console.log(req.body[1]);


    await providerRef.find({ city: req.body[0], category: req.body[1] }).then((kuch) => {

        console.log("found somthing *-+*+" + kuch);

        if (kuch != null) {
            resp.json({ kuch, message: "found!!" });
        }
        else {
            resp.json({ message: "Either location or Service Provider not Found !!" });
        }
    }).catch((error) => {
        console.error("Error in findMany:", error);
    });



}
async function searchEmailData(req,resp){

    console.log("eamil finding+++++++...");
    console.log(req.body);
    console.log("eamil finding+++++++...");

    providerRef.find({email:req.body.email}).then((kuch)=>{
        console.log(kuch);
        resp.send(kuch);
    })

}
async function adminAllUsers(req,resp){
    await newRefSchema.find().then((kuch) => {
        console.log(kuch);
        resp.send(kuch);
    }) 
}
async function adminAllClients(req,resp){
    await clientRef.find().then((kuch) => {
        console.log(kuch);
        resp.send(kuch);
    }) 
}
async function adminAllClientsBlock(req,resp){
    await clientRef.find().then((kuch) => {
        console.log(kuch);
        resp.send(kuch);
    }) 
}
async function adminAllProviders(req,resp){
    await providerRef.find().then((kuch) => {
        console.log(kuch);
        resp.send(kuch);
    }) 
}
async function fetchCitiestask(req, resp) {
    // console.log("hy reached");
    await postReqSchema.distinct("location").then((kuch) => {
        // console.log("*-*-*-*-*");
        resp.send(kuch);
    })
}
async function fetchCategoriestask(req, resp) {
    // console.log("hy reached");
    await postReqSchema.distinct("category").then((kuch) => {
        // console.log("*-*-*-*-*");
        resp.send(kuch);
    })
}
async function searchProvidertask(req, resp) {
    console.log(req.body);
    console.log(req.body[0]);
    console.log(req.body[1]);


    await postReqSchema.find({ location: req.body[0], category: req.body[1] }).then((kuch) => {

        console.log("found somthing *-+*+" + kuch);

        if (kuch != null) {
            resp.json({ kuch, message: "found!!" });
        }
        else {
            resp.json({ message: "Either location or Service Provider not Found !!" });
        }
    }).catch((error) => {
        console.error("Error in findMany:", error);
    });
}
async function postReq(req, resp) {
    console.log("postReqqqq");
    console.log(req.body);
    var obj = new postReqSchema(req.body);
    await obj.save().then(() => {
        console.log("********");
        console.log("request Successfull");
        resp.json({ status: true, message: "Request Posted !!" });

    }).catch((err) => {
        resp.json({ status: false, message: err.message });
    })


}
// async function profileUpdate(req, resp) {
//     console.log(req.body);
//     console.log("***");

//     var obj = new clientRef(req.body);

//     try {
//         const kuch = await clientRef.findOne({ email: obj.email });
//         // console.log(kuch);
//         if (!kuch) {
//             resp.send("User not found");
//             return;
//         }

//         const updateResult = await kuch.updateOne({
//             name: obj.name,
//             address: obj.address,
//             city: obj.city,
//             picpath: obj.picpath,
//             idpath: obj.idpath,
//             mobile: obj.mobile
//         });

//         console.log(updateResult);

//         resp.send("Profile Updated Successfully !!");
//     } catch (err) {
//         console.error(err);
//         resp.send(err);
//     }
// }
// resp.send(err);


// async function profileUpdate(req, resp) {
//     console.log("-------- Data -------");
//     console.log(req.body);
//     console.log("***");

//     const { email, name, mobile, address, city } = req.body;
//     const profilepic = req.files?.profilepic;
//     const idproof = req.files?.idproof;
//     let profilePicPath =""
//     if (profilepic) {
//       profilePicPath = path.join(
//         __dirname,
//         "..",
//         "uploads",
//         profilepic.name
//       );
//       profilepic.mv(profilePicPath);
//     }
//     let idPicPath=""
//     if (idproof) {
//       idPicPath = path.join(__dirname, "..", "uploads", idproof.name);
//       idproof.mv(idPicPath);
//     }

//     const updateData = {
//       name,
//       mobile,
//       address,
//       city,
//     };

//     if (profilepic) {
//       updateData.profilepic = profilePicPath;
//       console.log("profileeepicccc = "+(profilepic));
//     //   console.log("profileeepicccc = "+(profilePicPath));


//     }
//     if (idproof) {
//       updateData.idproof = idPicPath;
//       console.log("idddprrroooooff = "+idproof);
//     }

//     await clientRef.updateOne({ email }, { $set: updateData }).then((doc) => {
//         resp.send("Profile Data Saved");
//       })
//       .catch((err) => {
//         resp.send(err.message);
//       });







// ==========================================

// var obj = new clientRef(req.body);
// console.log(req.body);

// await clientRef.findOne({ email: req.body.email }).then((kuch) => {
//     // console.log(kuch);
//     // resp.send(obj);
//     kuch.updateOne(
//         {
//             name: req.body.name,
//             address: req.body.address,
//             city: req.body.city,
//             mobile: req.body.mobile


//             // picpath: req.files.profilepic.name,
//             // idpath: req.files.idproof.name,
//         }

//     ).then((e) => {
//         // console.log("updated obj");
//         // console.log(req.files.profile.name);
//         // console.log(e);
//         // resp.send(e);

//     })
//     console.log(req.files.profile.name);

//     resp.send("Profile Updated Successfully !!");


// }).catch((err) => {
//     console.log(err);
//     // resp.send(err);
// })

// }
async function profileFetch(req, resp) {
    console.log("***");
    console.log(req.body);
    var obj = new clientRef(req.body);

    await clientRef.findOne({ email: obj.email }).then((kuch) => {
        console.log(kuch);
        resp.send(kuch);

    })


}
async function providerProfileFetch(req, resp) {
    console.log("***");
    console.log(req.body);
    var obj = new providerRef(req.body);

    await providerRef.findOne({ email: obj.email }).then((kuch) => {
        console.log(kuch);
        resp.send(kuch);

    })


}
async function tokenLogin(req, resp) {
    console.log("tokenLogin fx ");
    var tokenEmail = req.headers['authorization'];
    console.log(tokenEmail);

    try {
        const user = webToken.verify(tokenEmail, process.env.SEC_KEY);
        console.log(user);

        if (user) {
            const rep = await newRefSchema.findOne({ email: user.email });
            if (rep != null) {
                resp.json({ status: true, rep, message: 'message kuch' });
                console.log(rep);
                return;
            }
        }
    } catch (error) {
        console.log("+*-/*++*9+" + error);

        if (error.name === 'TokenExpiredError') {
            resp.json({ status: false, message: 'Token has expired' });
        }
        else {
            resp.json({ status: false, message: 'iyghkjlm has expired' });

        }
    }
}

async function currentUser(req, resp) {
    console.log("&&&");

    // const token = webToken.decode(req.dtoken, process.env.sec_key);
    const token = webToken.verify(token, process.env.sec_key);

    try {
        const user = webToken.verify(token, process.env.SEC_KEY);
        console.log("hyyyy");
        console.log(token);

        if (user) {
            const rep = await newRefSchema.findOne({ email: user.emailLog });
            if (rep != null) {
                resp.json({ status: true, rep });
                return;
            }
        }
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            resp.json({ status: false, message: 'Token has expired' });
        }
    }
    // console.log(token);

    // var count = newRefSchema.findOne({ email: req.query.emailLog }).count;
    // if (count == 0) {
    //     resp.json({ status: false, message: "Invalid user id" });
    //     return;
    // }
    // else {

    //     var user = await newRefSchema.findOne({ email: req.query.emailLog });

    //     resp.json({ status: true, user, message: "okkkAy user ID " });
    //     return;
    // }

}

async function Extra(req, resp) {
    console.log(req.body);
    var token = webToken.sign({ text: req.body }, process.env.sec_key, { expiresIn: 60 });
    console.log(token);
    resp.json({ status: true, token });

    // localStorage.setItem("active_user", response.data.user.email);

    // console.log(kuchData);



}

module.exports = {
    signup_with_post, login, profile_client,
    profileUpdate, profileFetch,
    currentUser, tokenLogin, Extra,
    getImageName, profile_provider,
    provider_modify, fetchCities,
    fetchCategories, searchProvider,
    providerProfileFetch, postReq, fetchCitiestask
    , fetchCategoriestask, searchProvidertask,
    searchEmailData,adminAllUsers,adminAllClients
    ,adminAllProviders,adminAllClientsBlock,
    chkData_with_post
}






