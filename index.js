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

async function run() {
  try {
    await client.connect();
    const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    };
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// client.connect((err) => {
//   const collection = client.db("Nayika").collection("devices");
//   // perform actions on the collection object
//   console.log("hitting the db");

//   const user = {
//     name: "nurul hasan",
//     email: "yoyonurul@gmail.com",
//     phone: 01356654653,
//   };

//   collection.insertOne(user).then(() => {
//     console.log("insert success");
//   });

//   // client.close();
// });

app.get("/", (req, res) => {
  res.send("yo yo honey");
});

app.listen(port, () => {
  console.log("running server on port", port);
});
