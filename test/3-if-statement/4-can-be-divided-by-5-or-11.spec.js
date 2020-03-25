const should = require('should');
const { describe, it } = require('mocha');

const canBeDividedBy5or11 = require('../../lessons/3-if-statement/4-can-be-divided-by-5-or-11');

describe('CanBeDividedBy5or11', () => {
  it('should be a function', () => {
    should(canBeDividedBy5or11).be.of.type('function', '"canBeDividedBy5or11" must be a function');
  });

  it('should be true', () => {
    canBeDividedBy5or11(5).should.be.true('"canBeDividedBy5or11(5)" must return true');
    canBeDividedBy5or11(25).should.be.true('"canBeDividedBy5or11(25)" must return true');
    canBeDividedBy5or11(11).should.be.true('"canBeDividedBy5or11(11)" must return true');
    canBeDividedBy5or11(121).should.be.true('"canBeDividedBy5or11(121)" must return true');
  })

  it('should be false', () => {
    canBeDividedBy5or11(4).should.be.false('"canBeDividedBy5or11(4)" must return false');
    canBeDividedBy5or11(789).should.be.false('"canBeDividedBy5or11(789)" must return false');
  });
});
