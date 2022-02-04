const {modules} = require('../rexi.config');

module.exports = {
  async run(app) {
    // Before hook
    modules.forEach((el) => {
      require('../src/'+el+'/index').register(app);
    });

    // Boot hook
    modules.forEach((el) => {
      require('../src/'+el+'/index').boot(app);
    });
  }
};
