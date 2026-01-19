const express = require('express')
const bp = require('body-parser')
const app = express();
const port = 3000;
//app.use(express.json());
app.use(bp.json()); // for JSON data
app.use(bp.urlencoded({ extended: true })); // for URL-encoded data

let code = "Hello";

app.post("/", (req, res, next) => {
  console.log(req.body, next);
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello Get!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

while (true) {
  code = input('Say -> ')
}
