const fs = require('fs');
const path = require('path');
let handlers = {};
const {modules} = require('../../../rexi.config');

function addHandlers(dir, file){
  let configData = require(path.join(dir, file));
  let name = path.parse(file).name;
  handlers[name] = {
    ...(handlers[name] || {}),
    ...configData
  };
}

// Import module models
let parent = path.dirname(path.dirname(__dirname));

modules.forEach((el) => {
  let root = [parent, 'src', el , 'config'].join(path.sep);

  if (fs.existsSync(root)) {
    fs
    .readdirSync(root)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      addHandlers(root, file);
    });
  }
});

module.exports = handlers;
