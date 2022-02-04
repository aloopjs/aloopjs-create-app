const {modules} = require('../rexi.config');

module.exports = {
  async run(app) {
    // Before hook
    modules.forEach((el) => {
      const module = require('../src/'+el+'/index');
      module.register && module.register(app);
    });

    // Boot hook
    modules.forEach((el) => {
      const module = require('../src/'+el+'/index');
      module.boot && module.boot(app);
    });
  }
};
