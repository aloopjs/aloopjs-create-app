const fs = require('fs');
const path = require('path');
let handlers = {};
const modules = require('../../../modules');

function addHandlers(dir, file){
  let item = require(path.join(dir, file));
  let name = item.name || path.parse(file).name;
  handlers[item.group] = handlers[item.group] || {};
  handlers[item.group][name] = item.handle;
}

// Import module models
let parent = path.dirname(path.dirname(__dirname));

modules.forEach((el) => {
  let root = [parent, 'src', el , 'helpers'].join(path.sep);

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
