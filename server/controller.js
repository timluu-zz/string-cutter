let cutString = (str) => {
  let reducedStr = '';
    for(let i = 0; i < str.length; i++) {
      if(i % 3 === 2) {
        reducedStr += str[i];
      }
    }

    return reducedStr;
}


module.exports = {
  cut: function(str) {
    return new Promise((resolve, reject) => {
      let reducedStr = cutString(str);
      if(reducedStr || reducedStr === '') {
        resolve(reducedStr);
      } else {
        reject(new Error('There appears to be an error with your string.'));
      }
    })
  }
}