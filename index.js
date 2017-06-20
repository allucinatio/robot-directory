
const express = require('express');
const app = express();
// const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require("./data.js");


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// IN PROGRESS ^_^
// about to figure out how to repeat the process of getting data and then pass it to the index.mustache
 

function getContent {

{name: data.users[0].name, avatar: data.users[0].avatar, job: data.users[0].job, company: data.users[0].company})

app.get('/', function (req, res) {
  res.render('index', );
});


// renderbots function

// innerHTML function
  // calls renderbots function

// res render function
  // calls innerHTML function


app.listen(3000, function () {
  console.log('Successfully started express application!');
});
