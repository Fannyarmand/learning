const should = require('should');
const { describe, it } = require('mocha');

const isEven = require('../../lessons/3-if-statement/6-is-even-or-odd');

describe('IsEven', () => {
  it('should be a function', () => {
    should(isEven).be.of.type('function', '"isEven" must be a function');
  });

  it('should isEven', () => {
    isEven(0).should.be.true('"isEven(0)" must return true');
    isEven(2).should.be.true('"isEven(2)" must return true');
    isEven(123456).should.be.true('"isEven(123456)" must return true');
    isEven(1).should.be.false('"isEven(1)" must return false');
    isEven(123).should.be.false('"isEven(123)" must return false');
    isEven(1234567).should.be.false('"isEven(1234567)" must return false');
  });
});
