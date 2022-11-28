const express = require('express');
const rexijs = require('rexijs');
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

rexijs.run({app, router: require('express').Router(), name: 'express'}, require('./config.rexi'));

const server = app.listen(process.env.PORT, function () {
  console.log('runing ...');
});
