const should = require('should');
const { describe, it } = require('mocha');

const canBeDividedByANumber = require('../../lessons/3-if-statement/5-can-be-divided-by-a-number');

describe('CanBeDividedByANumber', () => {
  it('should be a function', () => {
    should(canBeDividedByANumber).be.of.type('function', '"canBeDividedByANumber" must be a function');
  });

  it('should canBeDivided', () => {
    canBeDividedByANumber(5, 5).should.be.equal(true, '"canBeDividedByANumber(5, 5)" must return true');
    canBeDividedByANumber(25, 5).should.be.equal(true, '"canBeDividedByANumber(25, 5)" must return true');
    canBeDividedByANumber(11, 11).should.be.equal(true, '"canBeDividedByANumber(11, 11)" must return true');
    canBeDividedByANumber(121, 11).should.be.equal(true, '"canBeDividedByANumber(121, 11)" must return true');
    canBeDividedByANumber(4, 11).should.be.equal(false, '"canBeDividedByANumber(4, 11)" must return false');
    canBeDividedByANumber(789, 12).should.be.equal(false, '"canBeDividedByANumber(789, 12)" must return false');
  });
});
