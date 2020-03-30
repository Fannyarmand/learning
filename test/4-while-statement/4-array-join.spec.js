const should = require('should');
const { describe, it } = require('mocha');

const joinArray = require('../../lessons/4-while-statement/4-array-join');

describe('JoinArray', () => {
  it('should be a function', () => {
    should(joinArray).be.of.type('function', '"joinArray" must be a function');
  });

  it('should joinArray', () => {
    joinArray(["a"], "").should.be.equal("a");
    joinArray(["a"], " ").should.be.equal("a");
    joinArray(["a","b","c"], "").should.be.equal("abc");
    joinArray(["a","b","c"], " ").should.be.equal("a b c");
    joinArray(["h","e","l","l","o"], "+").should.be.equal("h+e+l+l+o");
    joinArray(["h","e","l","l","o"], "u").should.be.equal("hueululuo");
  });
});
