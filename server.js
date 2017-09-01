var path = require('path');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
const app = express();

const memberInfo = {"tests":"ss"};
/* eslint-disable no-console */

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/dist'));

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

const development = process.env.NODE_ENV === 'development';

console.log(development)
if (development){
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}

// ProfileInfo
app.post('/api/puzzle/one', (req, res) => {
    console.log(req.body)
    if(req.body.code === 'GBNRJT'){
        res.status(200).send({ message: "You solved puzzle 1!", solution: "http://tw.ocodeh.unt"});
    }else if (req.body.code === 'xy') {
        res.status(500).send({ message: "You are getting closer"});
    }
    else{
      res.status(500).send({ message: "Wrong answer"});
    }
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
var port = process.env.PORT || 3001;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3001');
});