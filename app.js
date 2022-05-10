//Introducing dependencies and setting up environment
var express = require("express");
var mongoose = require("mongoose");
var app = express();
const port = process.env.PORT || 5000;

var cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const password = "Testi2022";

const uri =
  "mongodb+srv://MongoSmuli:" + password + "@cluster1.jwcch.mongodb.net/goals";

//connecting to MongoDB database with mongoose, log comment to console if connection is success or failure
try {
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}
//creating VAR Schema for database with validations
var Schema = mongoose.Schema;

var goalSchema = new Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 30 },
  content: { type: String, required: true, minlength: 10, maxlength: 1000 },
});

//creating mongoose object GoalData from Schema
var GoalData = mongoose.model("GoalData", goalSchema);

//creating routes with express
app.get("/", function (req, res) {
  res.sendFile(__dirname + "//public/index.html");
});

app.get("/api/getall", function (req, res) {
  GoalData.find({}, function (err, results) {
    res.json(results, 200);
  });
});
app.get("/api/:id", function (req, res) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return Error({ status: 422 });
  GoalData.findOne({ _id: req.params.id }).then(function (goals) {
    res.send(goals);
  });
});

app.post("/api/add", function (req, res) {
  var newGoal = new GoalData({
    title: req.body.title,
    content: req.body.content,
  });
  newGoal.save(function (err, goals) {
    if (err) return console.log(err);
    console.log(goals);
  });
  res.send("new goal added: " + req.body.title + " and " + req.body.content);
  /* res.send("Add a new goal: " + req.body.title + " (" + req.body.text + ")"); */
});

app.put("/api/update/:id", function (req, res) {
  GoalData.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    function () {
      GoalData.findOne({ _id: req.params.id }).then(function (goals) {
        res.send(goals);
      });
    }
  );
});
app.delete("/api/delete/:id", function (req, res) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return Error({ status: 422 });

  GoalData.findByIdAndDelete({ _id: req.params.id }).then(function (goals) {
    res.send(goals);
  });
});

app.get("*", function (req, res) {
  res.send("Can't find the requested page!", 404);
});
//Luodaan web-palvelin
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
