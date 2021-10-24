const { MongoClient } = require("mongodb");
const express = require("express");

const app = express();

const port = 4000;

//user: mydbuser1
//password: 229NQc8yF9hwzGad

const uri =
  "mongodb+srv://mydbuser1:229NQc8yF9hwzGad@cluster0.8bgmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
  res.send("yo yo honey");
});

app.listen(port, () => {
  console.log("running server on port", port);
});
