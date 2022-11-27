module.exports = {
  rq(str){
    // Check if have #
    if (str.charAt(0) === '#') {
      return require(str.replace(/^#/, '../src/' ) + '/index');
    }

    return require(str);
  },

  async run(app, config) {
    // Before hook
    config.modules.forEach((el) => {
      const module = this.rq(el);
      module.register && module.register(app, config);
    });

    // Boot hook
    config.modules.forEach((el) => {
      const module = this.rq(el);
      module.boot && module.boot(app, config);
    });
  }
};
