const fs = require('fs');
const path = require('path');
let handlers = {};

function addHandlers(dir, file){
  let item = require(path.join(dir, file));
  handlers[item.name] = item.handle;
}

// Import module models
let parent = path.dirname(path.dirname(__dirname));

global.App.config.modules.forEach((el) => {
  let root = [parent, 'src', el , 'middleware'].join(path.sep);

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
