var express=require("express");

var controller=require("../Controllers/Controllers");

var app=express.Router();
var auth=require("../middleware/auth");

app.post("/doextra",controller.Extra);


app.post("/chkData-with-post",controller.chkData_with_post);

app.post("/signup-process-with-post",controller.signup_with_post);
app.post("/login-process",controller.login);
app.get("/loginMiddleWare",controller.tokenLogin);
app.get("/get-image-name",controller.getImageName);

app.post("/profile-form-with-pic",controller.profile_client);
app.post("/profile-form-updation",controller.profileUpdate);
app.post("/profile-form-fetch",controller.profileFetch);
app.post("/profile-form-provider-fetch",controller.providerProfileFetch);

app.post("/profile-provider-form-with-pic",controller.profile_provider);
app.post("/provider-profile",controller.provider_modify);

app.get("/fetch-cities-from-provider",controller.fetchCities);
app.get("/fetch-categories-from-provider",controller.fetchCategories);
app.post("/search-from-provider",controller.searchProvider);
app.post("/search-email-data",controller.searchEmailData);

app.post("/admin-all-users",controller.adminAllUsers);
app.post("/admin-all-clients",controller.adminAllClients);
app.post("/admin-all-clients-block",controller.adminAllClientsBlock);

app.post("/admin-all-providers",controller.adminAllProviders);


app.get("/fetch-cities-from-task",controller.fetchCitiestask);
app.get("/fetch-categories-from-task",controller.fetchCategoriestask);
app.post("/search-from-task",controller.searchProvidertask);

app.post("/post-req",controller.postReq);



app.get("/currentuser",auth.jawth,controller.currentUser);
// app.get("/currentuser",controller.currentUser);



module.exports=app;