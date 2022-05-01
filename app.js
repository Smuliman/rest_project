var express = require("express");
const { FindCursor } = require("mongodb");
var app = express();
const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

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

/* client.connect((err) => {
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
}); */

app.get("/", function (req, res) {
  res.send("Etusivu REST");
});

app.get("/api/getall", function (req, res) {
  res.send("tulostetaan kaikki tavoitteet");
});

app.get("/api/:id", function (req, res) {
  res.send("Muokataan tavoitetta id");
});
app.get("/api/add", function (req, res) {
  res.send("lisätään leffa: " + req.body.title + " (" + req.body.text + ")");
});
app.get("/api/update/:id", function (req, res) {
  res.send("muokataan tavoitetta id: llä: " + req.params.id);
});
app.get("/api/delete/:id", function (req, res) {
  res.send("poistetaan tavoite id: llä: " + req.params.id);
});

app.get("*", function (req, res) {
  res.send("Can't find the requested page!", 404);
});
//Luodaan web-palvelin
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
