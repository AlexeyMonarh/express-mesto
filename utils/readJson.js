const fs = require('fs').promises;

const errorMessageJson = { message: 'Json is invalid' };

const errorMessageFile = { message: 'File not found' };

const readJson = (path) => fs.readFile(path)
  .catch(() => {
    throw errorMessageFile;
  })
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      throw errorMessageJson;
    }
  });

module.exports = readJson;
