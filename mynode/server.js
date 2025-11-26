var express = require("express");
var mongoose = require("mongoose");
var userRouter = require("./router/Routing");
var cors = require("cors");
var bp = require("body-parser");
var fileupload = require("express-fileupload");
var env=require("dotenv");
env.config();

var app = express();

app.use(fileupload());
app.use(cors());
// app.use(bp.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
app.use(bp.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/user", userRouter);
// uploads folder 
// app.use('/uploads', express.static('uploads'));
app.use('/uploads', express.static('uploads'));

app.listen(3003, () => {
    console.log("Server Started...");
})
var configObj = require("./config/dbconfig");
const dburl = configObj.dburl;

var dbCon = mongoose.connect(dburl).then(() => {
    console.log("Mongoose Connected...");
}).catch((err) => {
    console.log("*****" + err.toString());
    process.exit();
});

app.get("/", (req, resp) => {
    var path = __dirname + "../public/index.html";
    resp.sendFile(path);
})




