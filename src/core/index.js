const config = require('./reader/config');
const models = require('./reader/model');
const middleware = require('./reader/middleware');
const helpers = require('./reader/helper');

module.exports = (app) => {
  global.App = {config};
  global.App.models = () => models;
  global.App.middleware = () => middleware;
  global.App.helpers = () => helpers;
};
