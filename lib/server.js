import path from 'path';
import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';

const config = require('../webpack.config');
const app = express();
const compiler = webpack(config);

const memberInfo = {"tests":"ss"};
/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../index.html'));
});

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