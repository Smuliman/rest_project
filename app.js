var express = require("express");
const { FindCursor } = require("mongodb");
var app = express();
const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 3000;

const password = "Testi2022";

const uri =
  "mongodb+srv://MongoSmuli:" +
  password +
  "@cluster1.jwcch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var query = {
  title: "/Jedi/i",
};

client.connect((err) => {
  const collection = client.db("sample_mflix").collection("movies");
  if (err) throw err;
  collection
    .find(query)
    .limit(5)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});

app.get("/", function (req, res) {
  res.send("Etusivu REST");
});

app.get("/ivar", function (req, res) {
  res.send("fgjlbeebot");
});

app.get("/theo", function (req, res) {
  res.send("karlpapper");
});

app.get("*", function (req, res) {
  res.send("Can't find the requested page!", 404);
});
//Luodaan web-palvelin
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
