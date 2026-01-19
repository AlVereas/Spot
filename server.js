const express = require("express");
import bodyParser from body-parser;
const app = express();
const port = 3000;
app.use(bodyParser.json()); // for JSON data
app.use(bodyParser.urlencoded({ extended: true })); // for URL-encoded data

app.post("/", (req, res, next) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello Get!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
