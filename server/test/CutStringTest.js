const cutString = require('../controller.js').cutString;
const expect = require('chai').expect;

describe('cutString Function', () => {
  let str;

  it('should return a string', () => {
    str = 'hello world';
    expect(typeof cutString(str)).to.equal('string');
  });

  it('should return every third character', () => {
    str = 'abcdefghi';
    expect(cutString(str)).to.equal('cfi');
  
    str = 'abcdefghijk';
    expect(cutString(str)).to.equal('cfi');
  });

  it('should return the default message if entry is less than 3 characters', () => {
    str = 'ab';
    const defaultMsg = '(Please enter a string with 3 or more characters.)';
    expect(cutString(str)).to.equal(defaultMsg);
  });
})