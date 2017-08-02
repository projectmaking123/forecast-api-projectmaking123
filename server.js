const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res, next) {
  request({
    uri: 'http://sudoku-api.herokuapp.com/api/v1/sudoku/generate'
  }).pipe(res);
});

app.listen(port);
