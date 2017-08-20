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

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../index.html'));
});

function generateServerDelay(){
    return Math.floor(Math.random() * 300) + 50;
}

// ProfileInfo
app.get('/api/common/member/memberinformation/', (req, res) => {
  setTimeout(() => {
      res.status(200).send(memberInfo);
  }, generateServerDelay());
});

app.listen(7771, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:7771');
});