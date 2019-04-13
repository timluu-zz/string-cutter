const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 3000;
app.use(bodyParser.json());

app.post('/test', (req, res) => {
  let str = req.body;
  console.log(str);
})

app.listen(port, () => {
  console.log(`currently listening to port ${port}`);
})