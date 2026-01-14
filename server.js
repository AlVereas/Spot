const express = require("express");
const app = express();
const port = 3000;

app.get("/inform", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, '195.57.144.136', () => {
  console.log(`Listening at http://localhost:${port}`);
});
