const {modules} = require('../rexi.config');

module.exports = {
  run(app) {
    modules.forEach((el) => {
      require('../src/'+el+'/index')(app);
    });
  }
};
