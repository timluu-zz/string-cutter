const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller.js');

const port = 3000;
app.use(bodyParser.json());

app.post('/test', (req, res) => {
  let str = req.body['string_to_cut'];
  controller.cut(str)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
})

app.listen(port, () => {
  console.log(`currently listening to port ${port}`);
})