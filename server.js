require('dotenv').config()
const express = require('express');
const request = require('request');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())

app.get('/:lat/:lng?', function(req, res, next) {
  request({
    uri: ('https://api.darksky.net/forecast/' + process.env.API_KEY + '/' + req.params.lat + ',' + req.params.lng)
  }).pipe(res);
  console.log(res);
});

app.listen(port);
