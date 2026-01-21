import express from 'express';
import BodyParser from 'body-parser';
import inquirer from 'inquirer';
import readline from 'readline';
const app = express();
const port = 3000;
//app.use(express.json());
app.use(BodyParser.json()); // for JSON data
app.use(BodyParser.urlencoded({ extended: true })); // for URL-encoded data
const readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let code = "Hello";

app.post("/", (req, res, next) => {
  console.log(req.body, next);
  res.send(code);
});

app.get("/", (req, res) => {
  console.log(req.body);
  res.send(code);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

const response = await inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: 'What is your username?',
  },
]);

console.log(response.username);   
code = response.username
