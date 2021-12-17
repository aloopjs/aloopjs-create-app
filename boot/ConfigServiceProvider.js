module.exports = {
  boot(app) {
    global.App = global.App || {};

    global.App.config = {
      modules: require('../config/modules'),
      db: require('../config/db'),
      connection: require('../config/connection')
    };
  }
};
