const { MongoClient } = require("mongodb");
const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const uri = `mongodb+srv://geniusDB:hbu6TAqImuesbrPH@cluster0.8bgmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(uri);

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//async await fn

app.get("/", (req, res) => {
  res.send("dhur node valoi pera diteche still ");
});

app.listen(port, () => {
  console.log("node ajke maire baap kore dibo");
});
