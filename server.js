const express = require("express");
const app = express();
const port = 3000;

app.post("/", (req, res, next) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
