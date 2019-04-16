const { validationResult } = require('express-validator/check');

const cutString = (str) => {
  let reducedStr = '';
  
  if(str.length < 3) {
    return '(Please enter a string with 3 or more characters.)';
  }

  for(let i = 0; i < str.length; i++) {
    if(i % 3 === 2) {
      reducedStr += str[i];
    }
  }
  
  return reducedStr;
}


module.exports = {
  cut: function(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }

    const str = req.body['string_to_cut'];
    return res.status(200).send({
      return_string: cutString(str)
    })
  },
  cutString
}