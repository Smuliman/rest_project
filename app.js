var express = require("express");
/* const { FindCursor } = require("mongodb"); */
var mongoose = require("mongoose");
var app = express();
/* const MongoClient = require("mongodb").MongoClient; */
const port = process.env.PORT || 3000;

const password = "Testi2022";

const uri =
  "mongodb+srv://MongoSmuli:" + password + "@cluster1.jwcch.mongodb.net/goals";
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}

var Schema = mongoose.Schema;

var goalSchema = new Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 30 },
  content: { type: String, required: true, minlength: 10, maxlength: 1000 },
});

var GoalData = mongoose.model("GoalData", goalSchema);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send(
    "This is an app that lets you save and moderate your goals in life!"
  );
});

app.get("/api/getall", function (req, res) {
  GoalData.find({}, function (err, results) {
    res.json(results, 200);
  });
});
app.get("/api/:id", function (req, res) {
  GoalData.findOne({ _id: req.params.id }).then(function (goals) {
    res.send(goals);
  });
});

/* app.get("/api/:id", function (req, res) {
  res.send("Get spesific goal using goal id");
}); */
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
