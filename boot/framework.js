const modules = require('../modules');

module.exports = {
  run(app) {
    modules.forEach((el) => {
      require('../src/'+el+'/index')(app);
    });
  }
};
