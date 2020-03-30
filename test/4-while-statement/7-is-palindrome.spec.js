const should = require('should');
const { describe, it } = require('mocha');

const isPalindrome = require('../../lessons/4-while-statement/7-is-palindrome');

describe('IsPalindrome', () => {
  it('should be a function', () => {
    should(isPalindrome).be.of.type('function', '"isPalindrome" must be a function');
  });

  it('should isPalindrome', () => {
    isPalindrome("a").should.be.true();
    isPalindrome("abc").should.be.false();
    isPalindrome("aba").should.be.true();
    isPalindrome("121").should.be.true();
    isPalindrome("1111").should.be.true();
    isPalindrome("12321").should.be.true();
  });
});
