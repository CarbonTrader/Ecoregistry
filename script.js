const express = require("express");
const app = express();
var cors = require("cors");
let data = require("./data");

app.use(cors());

const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
