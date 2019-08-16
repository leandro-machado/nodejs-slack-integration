const express = require("express");
const app = express();

const port = 5000;

const bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});

app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});

const axios = require('axios');

app.post("/", (req, res) => {
  const { entry, host } = req.body;

  const guest = JSON.parse(entry);
  const childs = JSON.parse(host);

  const parameters = {
    "color":"#178bea",
    "text": "Olha só, temos visitas! :tada:",
    "fields":[
       {
          "title": `:carlton: Temos visita(s) para ${childs.name}! :carlton:`,
          "value": `${guest.your_full_name} está te aguardando na recepção <!channel>`,
          "short": false
       }
    ]
 };

 const url = 'https://hooks.slack.com/services/...'; // YOUR HOOK IN SLACK

 axios.post(url, parameters)
  .then(function () {
    res.json([parameters]);
  })
});