const fs = require('fs').promises;

const readJson = (path) => {
  return fs.readFile(path)
  .catch(err => {
    throw `file ${path} not found`
  })
  .then((text) => {
    try{
      return JSON.parse(text);
    }
    catch (_) {
      throw 'Json is invalid';
    }
  })
};

module.exports = readJson;