const { MongoClient } = require("mongodb");
const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const uri =
  "mongodb+srv://mydbuser1:VWOFQjGXhRqWfoDI@cluster0.8bgmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("dhur node er mai re chudi. valoi pera diteche still ");
});

app.listen(port, () => {
  console.log("node ajke maire baap kore dibo");
});
