import express from 'express';
import BodyParser from 'body-parser';
import inquirer from 'inquirer';
import readline from 'readline';
const app = express();
const port = 3000;
//app.use(express.json());
app.use(BodyParser.json()); // for JSON data
app.use(BodyParser.urlencoded({ extended: true })); // for URL-encoded data

let code = "Hello";

app.post("/", (req, res, next) => {
  if (req.body) {
     console.log(req.body);
  }
  res.send(code);
});

app.get("/", (req, res) => {
  if (req.body) {
     console.log(req.body);
  }
  res.send(code);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

while (true) {
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Escribe aqui:',
    },
  ]);

  code = response.text
}
