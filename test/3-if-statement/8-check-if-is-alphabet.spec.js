const should = require('should');
const { describe, it } = require('mocha');

const isAlphabet = require('../../lessons/3-if-statement/8-is-alphabet');

describe('IsAlphabet', () => {
  it('should be a function', () => {
    should(isAlphabet).be.of.type('function', '"isAlphabet" must be a function');
  });

  it('should isAlphabet', () => {
    isAlphabet('a').should.be.true('"isAlphabet("a")" must return true');
    isAlphabet('B').should.be.true('"isAlphabet("B")" must return true');
    isAlphabet('Z').should.be.true('"isAlphabet("Z")" must return true');
    isAlphabet('y').should.be.true('"isAlphabet("y")" must return true');
    isAlphabet('l').should.be.true('"isAlphabet("l")" must return true');
    isAlphabet('M').should.be.true('"isAlphabet("M")" must return true');
    isAlphabet('2').should.be.false('"isAlphabet("2")" must return false');
    isAlphabet('"').should.be.false('"isAlphabet(""")" must return false');
    isAlphabet(";").should.be.false('"isAlphabet(";")" must return false');
    isAlphabet("é").should.be.false('"isAlphabet("é")" must return false');
    isAlphabet("Google").should.be.true('"isAlphabet("Google")" must return true');
    isAlphabet("GOOGLE").should.be.true('"isAlphabet("GOOGLE")" must return true');
    isAlphabet("google").should.be.true('"isAlphabet("google")" must return true');
  });
});
