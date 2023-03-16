const express = require('express');
const aloopjs = require('aloopjs');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

aloopjs.run({app, name: 'demo', type: 'express'}, require('./config.aloopjs'));

const server = app.listen(process.env.PORT, function () {
  console.log('runing ...');
});
