const path = require('path');

module.exports = {
  port: 3000,
  staticAssets: path.join(__dirname, '/client/dist')
}