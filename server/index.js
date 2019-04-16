const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { body } = require('express-validator/check');
const controller = require('./controller.js');
const config = require('../config.js');

const port = config.port;
app.use(bodyParser.json());
app.use(express.static(config.staticAssets));

app.post('/test', [
  body('string_to_cut', 'Input needs to be a valid string').isString()
], controller.cut);

app.listen(port, () => {
  console.log(`currently listening to port ${port}`);
})