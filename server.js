var path = require('path');
var express = require('express');
var fs = require('fs');
const app = express();

const memberInfo = {"tests":"ss"};
/* eslint-disable no-console */

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/dist'));

function generateServerDelay(){
    return Math.floor(Math.random() * 300) + 50;
}

// ProfileInfo
app.post('/api/puzzle/one', (req, res) => {
  setTimeout(() => {
      if(req.body.code === 'one'){
          res.status(200).send({ message: "You solved puzzle 1!", solution: "http://tw.ocodeh.unt"});
      }else if (req.body.code === 'xy') {
          res.status(500).send({ message: "You are getting closer"});
      }
      else{
        res.status(500).send({ message: "Wrong answer"});
      }
  }, generateServerDelay());
});

app.post('/api/puzzle/two', (req, res) => {
  setTimeout(() => {
      if(req.body.code === 'two'){
          res.status(200).send({ message: "Number two solved! Next one is going to be tricky"});
      }else if (req.body.code === 'xy') {
          res.status(500).send({ message: "You are getting closer"});
      }
      else{
        res.status(500).send({ message: "Wrong answer"});
      }
  }, generateServerDelay());
});

app.post('/api/puzzle/three', (req, res) => {
  setTimeout(() => {
      if(req.body.code === 'three'){
          res.status(200).send({ message: "You finished the game! Congratulations 🎁"});
      }else if (req.body.code === 'xy') {
          res.status(500).send({ message: "You are getting closer"});
      }
      else{
        res.status(500).send({ message: "Wrong answer"});
      }
  }, generateServerDelay());
});

app.listen(7771, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:7771');
});