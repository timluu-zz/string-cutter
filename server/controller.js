module.exports = {
  cutString: function(str) {
    let reducedStr = '';
    for(let i = 2; i < str.length; i+= 3) {
      reducedStr += str[i];
    }

    return reducedStr;
  }
}