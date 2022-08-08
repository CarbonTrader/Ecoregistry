const express = require("express");
const app = express();

let data = require("./data");

const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
