const express = require("express");

const app = express();

const port = 4000;

//user: mydbuser1
//password: 229NQc8yF9hwzGad

app.get("/", (req, res) => {
  res.send("yo yo honey");
});

app.listen(port, () => {
  console.log("running server on port", port);
});
