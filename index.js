const express = require("express");

const app = express();

const port = 4000;

app.get("/users", (req, res) => {
  res.send("dhur node er mai re chudi. valoi pera diteche still ");
});

app.listen(port, () => {
  console.log("node ajke maire baap kore dibo");
});
