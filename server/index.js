const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller.js');

const port = 3000;
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/test', (req, res) => {
  let str = req.body['string_to_cut'];
  controller.cut(str)
    .then((response) => {
      let data = {
        return_string: response
      };
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
})

app.listen(port, () => {
  console.log(`currently listening to port ${port}`);
})